import { Product } from "./types/Product";

export const sampleProducts:Product[] = [
    {
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirt",
        image: "../images/p1.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        numRiviews: 10,
        rating: 4.5,
        description: "high quelity shirt",

    },
    {
        name: "Adidas Fit Shirt",
        slug: "adidas-fit-shirt",
        category: "Shirt",
        image: "../images/p2.jpg",
        price: 78,
        countInStock: 15,
        brand: "Adidas",
        numRiviews: 16,
        rating: 4.9,
        description: "high quelity product",

    },
    {
        name: "Nike Slim Pants",
        slug: "nike-free-pants",
        category: "Pants",
        image: "../images/p3.jpg",
        price: 220,
        countInStock: 10,
        brand: "Lacoste",
        numRiviews: 17,
        rating: 4.8,
        description: "",

    },
    {
        name: "Topper Slim Fants",
        slug: "topper-free-fants",
        category: "fants",
        image: "../images/p4.jpg",
        price: 220,
        countInStock: 10,
        brand: "Topper",
        numRiviews: 17,
        rating: 4.8,
        description: "Product other",

    },
]