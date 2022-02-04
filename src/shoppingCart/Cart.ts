import Product from "./Product";

 class Cart{
     
     private product : Product;  
     private totalPrice = 0;
     productList = new Set<Product>();
     salesTax = 0;
      
      addProducts(product : Product  , qty : number){
         this.product = product;
         product.setQuantity(qty);
         this.productList.add(product);
        }
     
       addSalesTax(salesTax: number) {
            this.salesTax = salesTax;
        }
       
        calculateTotalPrice() {
         this.productList.forEach(product => {
             this.totalPrice += product.getQuantity()*product.getUnitPrice();
         });
         return +(this.totalPrice + (this.totalPrice*this.salesTax/100)).toFixed(2);
    }
   
}


export default Cart;