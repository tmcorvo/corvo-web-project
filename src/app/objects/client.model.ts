export class Client {
    name: string;
    phone: string;
    email: string;
    address: string;
    age: number;


    constructor(name: string, phone: string, email: string, address: string, age: number) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getPhone(): string {
        return this.phone;
    }

    getEmail(): string {
        return this.email;
    }

    getAddress(): string {
        return this.address;
    }

    getAge(): number {
        return this.age;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPhone(phone: string): void {
        this.phone = phone;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    setAge(age: number): void {
        this.age = age;
    }
}

// Usage
const client = new Client('John Doe', '123-456-7890', 'john.doe@example.com', '123 Main St', 30);
console.log(client);