
class Product {
  
  private name: string;
  private unitPrice: number;
  private quantity: 0;

  
  constructor(name: string, unitPrice: number, quantity: number) {
      this.name = name;
      this.unitPrice = unitPrice;
      this.quantity += quantity;
  }

  getName(): string {
    return this.name;
  }


  getUnitPrice(): number {
    return this.unitPrice;
  }

}

export default Product;

