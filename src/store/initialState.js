const initialState = {
    items: [
        {
            id: 1,
            name: "Jaguar XE",
            description: "Автомобиль для тех, кто знает себе цену",
            url: "../src/img/items/jaguar.jpeg",
            price: 5000000
        },
        {
            id: 2,
            name: "BMW X1",
            description: "Бумер крут, даже если не черный",
            url: "../src/img/items/bmw.jpeg",
            price: 3000000
        },
        {
            id: 3,
            name: "Volvo S60",
            description: "Ваш выбор, если любите надежность",
            url: "../src/img/items/volvo.jpeg",
            price: 2500000
        }
    ],
    addItem: {
        itemData: {
            id: null,
            name: "",
            description: "",
            url: "",
            price: null,
        },
        count: 1,
        promo: '',
        discount: 0,
        isDisplayed: false
    },
    basket: {
        isDisplayed: false,
        promo: '',
        discount: 0,
        items: []
    }
};

export default initialState;