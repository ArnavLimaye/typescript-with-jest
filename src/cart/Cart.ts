import Product from "./Product";


class Cart {
    
    private name : string;
    private unitPrice : number;
    private quantity = 0;
    

    cartItems = new Set<Product>();


    public addProduct(product: Product, quantity: number) {                          
        this.name = product.getName();
        this.unitPrice = product.getUnitPrice();
        this.quantity += quantity;

        this.cartItems.add(product);
    }

    getTotalPriceOfCart(): string {
        const totalPrice = (this.unitPrice * this.quantity).toFixed(2);
        return totalPrice;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getCartItems(): Set<Product> {
        return this.cartItems;
    }

}

export default Cart;

