
class Product {
  
  private name: string;
  private unitPrice: number;
  private quantity = 0;

  constructor(name: string, unitPrice: number) {
      this.name = name;
      this.unitPrice = unitPrice;
  }

  getName(): string {
    return this.name;
  }

  getUnitPrice(): number {
    return this.unitPrice;
  }

 getQuantity(): number {
   return this.quantity
 }

 setNoOfProducts(noOfProducts: number) {
   this.quantity += noOfProducts; 
 }

}

export default Product;

