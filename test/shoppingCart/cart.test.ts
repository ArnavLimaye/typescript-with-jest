import Cart from "../../src/shoppingCart/Cart";
import Product from "../../src/shoppingCart/Product"

describe("Shopping cart story 1", () => {

    it("should Shopping cart be not null", ()=>{
        const cart = new Cart();
        expect(cart).not.toEqual(null);
    })

    it("should add quantity 4 and return it" , () =>{
        const cart = new Cart();
        const dove = new Product("DoveSoap", 39.99 );
       
        cart.addProducts(dove, 4);
       
        expect(dove.getQuantity()).toBe(4);
    })

    it("should return total price when 4 soaps are added as 159.96 ", () => {
        const cart = new Cart();
        const dove = new Product("DoveSoap", 39.99 );
       
        cart.addProducts(dove , 4);
       
        expect(cart.calculateTotalPrice()).toBe(159.96);

    })
})

describe("Shopping cart story 2" , () =>{
    it("should add quantity 3 then 4 and return totalprice of 7 as 319.92 ", () => {
        const cart = new Cart();
        const dove = new Product("DoveSoap", 39.99);
       
        cart.addProducts(dove, 3);
        cart.addProducts(dove, 5);
       
        expect(cart.calculateTotalPrice()).toBe(319.92);
    })
    it("should return totalprice of two different product added as 279.96", () => {
        const cart = new Cart();
        const dove = new Product("DoveSoap", 39.99);
        const axe = new Product("AxeDeos", 99.99);
       
        cart.addProducts(dove, 2);
        cart.addProducts(axe, 2);
       
        expect(cart.calculateTotalPrice()).toEqual(279.96);
    })
})

describe("Shopping cart story - 3" , () => {
    it("should return total price as 314.95 after adding salestax" , () => {
        const cart = new Cart();
        const dove = new Product("DoveSoap", 39.99);
        const axe = new Product("AxeDeos", 99.99);
        const salesTax = 12.5;

        cart.addProducts(dove, 2);
        cart.addProducts(axe, 2);
        cart.addSalesTax(salesTax);

        expect(cart.calculateTotalPrice()).toBe(314.95);
    })
})
