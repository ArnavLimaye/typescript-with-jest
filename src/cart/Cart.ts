import Product from "./Product";
import ShoppingCartPriceCalculator from "./ShoppingCartPriceCalculator"


class Cart {
    
    private cartItemSet = new Set<Product>();

    public addProduct(product: Product, quantity: number) {                          
   
       let flag = false;

        this.cartItemSet.forEach((items) => {

            if(items.getName() === product.getName()) {
                items.setNoOfProducts(quantity);
                flag = true;
            } 
        })

        if(flag === false)  {

            product.setNoOfProducts(quantity);
            this.cartItemSet.add(product);
        }
    }

    public getQuantity() : number {
        let totalQuantity = 0;
        this.getCartItemSet().forEach((product) => {
        totalQuantity += product.getQuantity();
    })
    return totalQuantity;
    }


    getTotalPriceWithoutTaxes(): number {
        let shoppingCartPriceCalculator = new ShoppingCartPriceCalculator();
        return shoppingCartPriceCalculator.calculateTotalPriceWithoutTaxes(this.getCartItemSet());
    }

    getCartItemSet(): Set<Product> {
        return this.cartItemSet;
    }


    public setSalesTaxMultiplier(salesTaxMultiplier : number) {
        let shoppingCartPriceCalculator = new ShoppingCartPriceCalculator(); 
        shoppingCartPriceCalculator.setSalesTaxMultiplier(salesTaxMultiplier);
    }

    calculateTotalSalesTax(){
        let shoppingCartPriceCalculator = new ShoppingCartPriceCalculator();
        return shoppingCartPriceCalculator.calculateTotalSalesTax(this.getCartItemSet());
    }

    calculateTotalPriceOfCartIncludingTaxes(){
        let shoppingCartPriceCalculator = new ShoppingCartPriceCalculator();
        return shoppingCartPriceCalculator.calculateTotalPriceOfCartIncludingTaxes(this.getCartItemSet());
    }

}

export default Cart;

