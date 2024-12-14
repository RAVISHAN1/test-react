import shop1 from '../../assets/img/shop/shop-1.jpg';
import shop2 from '../../assets/img/shop/shop-2.jpg';
import shop3 from '../../assets/img/shop/shop-3.jpg';
import shop4 from '../../assets/img/shop/shop-4.jpg';
import shop5 from '../../assets/img/shop/shop-5.jpg';
import shop6 from '../../assets/img/shop/shop-6.jpg';
import shop7 from '../../assets/img/shop/shop-7.jpg';
import shop8 from '../../assets/img/shop/shop-8.jpg';
import shop9 from '../../assets/img/shop/shop-9.jpg';

export const getProductsList = async (clientId) => {

    const products = [
        {
            id: 1,
            name: "Furry hooded parka",
            price: 59.0,
            image: shop1,
            label: "New",
            rating: 5,
        },
        {
            id: 2,
            name: "Flowy striped skirt",
            price: 49.0,
            image: shop2,
            rating: 5,
        },
        {
            id: 3,
            name: "Croc-effect bag",
            price: 59.0,
            image: shop3,
            rating: 5,
        },
        {
            id: 4,
            name: "Dark wash Xavi jeans",
            price: 59.0,
            image: shop4,
            rating: 5,
        },
        {
            id: 5,
            name: "Ankle-cuff sandals",
            price: 49.0,
            originalPrice: 59.0,
            image: shop5,
            label: "Sale",
            rating: 5,
        },
        {
            id: 6,
            name: "Contrasting sunglasses",
            price: 59.0,
            image: shop6,
            rating: 5,
        },
        {
            id: 7,
            name: "Circular pendant earrings",
            price: 59.0,
            image: shop7,
            rating: 5,
        },
        {
            id: 8,
            name: "Cotton T-Shirt",
            price: 59.0,
            image: shop8,
            label: "Out Of Stock",
            rating: 5,
        },
        {
            id: 9,
            name: "Water resistant zips backpack",
            price: 49.0,
            originalPrice: 59.0,
            image: shop9,
            label: "Sale",
            rating: 5,
        },
    ];

    return products;
};