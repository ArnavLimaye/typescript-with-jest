import Product from "./Product";

class ShoppingCartPriceCalculator { 

private salesTaxMultiplier = 12.5;


calculateTotalPriceWithoutTaxes(cartItemSet : Set<Product>) : number {

    let totalPrice = 0;
    cartItemSet.forEach((product) => {
        totalPrice += +(product.getUnitPrice() * product.getQuantity()).toFixed(2);
    })
    return totalPrice;
}


 setSalesTaxMultiplier(salesTaxMultiplier : number) {
    this.salesTaxMultiplier = salesTaxMultiplier;
}

 getSalesTaxMultiplier() {
    return this.salesTaxMultiplier / 100;
}

calculateTotalSalesTax(cartItemSet : Set<Product>) : number {
    let totalSalesTaxRate= this.getSalesTaxMultiplier();
    let totalSalesTax = +(totalSalesTaxRate * (this.calculateTotalPriceWithoutTaxes(cartItemSet))).toFixed(0);
    return totalSalesTax;
}

 calculateTotalPriceOfCartIncludingTaxes(cartItemSet : Set<Product>){
    let totalPriceOfCartIncludingTaxes = this.calculateTotalPriceWithoutTaxes(cartItemSet)+(this.calculateTotalSalesTax(cartItemSet));
    return totalPriceOfCartIncludingTaxes;
}
}

export default ShoppingCartPriceCalculator;