export const getProductsCategories = async () => {
    const data = {
        filterCategories: [
            { title: "Women", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
            { title: "Men", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
            { title: "Kids", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
            { title: "Accessories", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
            { title: "Cosmetic", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
        ],
        filterSizes: ["xxs", "xs", "xs-s", "s", "m", "m-l", "l", "xl"],
        filterColors: [
            { id: "black", name: "Blacks" },
            { id: "whites", name: "Whites" },
            { id: "reds", name: "Reds" },
            { id: "greys", name: "Greys" },
            { id: "blues", name: "Blues" },
            { id: "beige", name: "Beige Tones" },
            { id: "greens", name: "Greens" },
            { id: "yellows", name: "Yellows" },
        ],
    };

    return data;
};
