class Product{
    private unitPrice : number;
    private name: string;
    private quantity = 0 ;

    constructor(name: string , unitPrice : number){
        this.name = name;
        this.unitPrice = unitPrice;
    }

    setQuantity(qty : number){
        this.quantity += qty;
    }

    getQuantity(){
       return this.quantity;
    }

    getUnitPrice(){
        return this.unitPrice;
    }
}

export default Product;