export class Product {
    name: string;
    category: string;
    brand: string;
    price: number;
    size: string;
    quantity: number;
    imageUrl: string;
    description: string;
   
    constructor(name: string, category: string, brand: string, price: number, size: string, quantity: number, imageUrl: string, description: string) {
       this.name = name;
       this.category = category;
       this.brand = brand;
       this.price = price;
       this.size = size;
       this.quantity = quantity;
       this.imageUrl = imageUrl;
       this.description = description;
    }
   }