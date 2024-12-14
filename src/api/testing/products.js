import shop1 from '../../assets/img/shop/shop-1.jpg';
import shop2 from '../../assets/img/shop/shop-2.jpg';
import shop3 from '../../assets/img/shop/shop-3.jpg';
import shop4 from '../../assets/img/shop/shop-4.jpg';
import shop5 from '../../assets/img/shop/shop-5.jpg';
import shop6 from '../../assets/img/shop/shop-6.jpg';
import shop7 from '../../assets/img/shop/shop-7.jpg';
import shop8 from '../../assets/img/shop/shop-8.jpg';
import shop9 from '../../assets/img/shop/shop-9.jpg';

// Array of random product names
const productNames = [
    "Furry hooded parka",
    "Flowy striped skirt",
    "Croc-effect bag",
    "Dark wash Xavi jeans",
    "Ankle-cuff sandals",
    "Contrasting sunglasses",
    "Circular pendant earrings",
    "Cotton T-Shirt",
    "Water resistant zips backpack",
];

// Array of possible labels
const productLabels = ["New", "Sale", "Out Of Stock", null];

// Array of images
const productImages = [shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9];

// Function to get random item from an array
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

export const getProductsList = async (page = 1) => {
    const storageKey = "PRODUCTS_LIST";
    const savedProducts = localStorage.getItem(storageKey);
    const productsPerPage = 9;

    let products;

    if (savedProducts) {
        // Parse the saved products from localStorage
        products = JSON.parse(savedProducts);
    } else {
        // Generate 1000 products dynamically
        products = [];
        for (let i = 1; i <= 1000; i++) {
            const randomName = getRandomItem(productNames);
            const randomPrice = (Math.random() * 100 + 10).toFixed(2); // Random price between $10 and $110
            const randomImage = getRandomItem(productImages);
            const randomLabel = getRandomItem(productLabels);
            const randomRating = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5

            products.push({
                id: i,
                name: `${randomName} #${i}`,
                price: parseFloat(randomPrice),
                originalPrice: Math.random() > 0.5 ? (randomPrice * 1.2) : null, // 50% chance of having an original price
                image: randomImage,
                label: randomLabel,
                rating: randomRating,
            });
        }

        // Store the generated products in localStorage
        localStorage.setItem(storageKey, JSON.stringify(products));
    }

    // Paginate the products
    const startIndex = (page - 1) * productsPerPage;
    const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

    // Return the paginated products along with metadata
    return {
        products: paginatedProducts,
        total: products.length,
        currentPage: page,
        totalPages: Math.ceil(products.length / productsPerPage),
    };
};
