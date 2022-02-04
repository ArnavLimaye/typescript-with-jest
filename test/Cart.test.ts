import Cart from "../src/cart/Cart" 
import Product from "../src/cart/Product" 

describe("Shopping Cart Story 1", () => {

    it("should be empty cart", () => {

        const cart = new Cart();

        expect(cart).not.toEqual(null);  
    })

    it("should add a product", () => {
        const cart = new Cart();
        const name = "Dove";
        const unitPrice = 39.99;
        const soapProduct = new Product(name, unitPrice);

        const quantity = 5;
        cart.addProduct(soapProduct, quantity);

        expect(cart).toEqual({name, unitPrice, quantity});
        
    })

    it("should calculate total price of the cart", () => {
        const cart = new Cart();
        const soapName = "Dove";
        const soapUnitPrice = 39.99;
        const soapProduct = new Product(soapName, soapUnitPrice);
        const soapQuantity = 5;
        

        cart.addProduct(soapProduct, soapQuantity);
        const EXPECTED_TOTAL_CART_PRICE = '199.95';
        const actualTotalCartPrice = cart.getTotalPriceOfCart();

        expect(actualTotalCartPrice).toEqual(EXPECTED_TOTAL_CART_PRICE);
    })

})

describe("Shopping Cart Story 2", () => {

    it("should add additional quantity of a product to the cart", () => {

        const cart = new Cart();
        const soapName = "Dove";
        const soapUnitPrice = 39.99;
        const soapProduct = new Product(soapName, soapUnitPrice);
        const soapQuantity = 5;
        

        cart.addProduct(soapProduct, soapQuantity);
        const additionalSoapQuantity = 3;
        cart.addProduct(soapProduct, additionalSoapQuantity);
        const EXPECTED_SOAP_QUANTITY = 8;
        const actualSoapQuantity = cart.getQuantity();

        expect(actualSoapQuantity).toEqual(EXPECTED_SOAP_QUANTITY);

    })

    it("should calculate total cart price after adding additional quantity of a product", () => {
        const cart = new Cart();
        const soapName = "Dove";
        const soapUnitPrice = 39.99;
        const soapProduct = new Product(soapName, soapUnitPrice);
        const soapQuantity = 5;
        
        cart.addProduct(soapProduct, soapQuantity);
        const additionalSoapQuantity = 3;
        cart.addProduct(soapProduct, additionalSoapQuantity);
        const EXPECTED_TOTAL_CART_PRICE = '319.92';
        const actualTotalCartPrice = cart.getTotalPriceOfCart();

        expect(actualTotalCartPrice).toEqual(EXPECTED_TOTAL_CART_PRICE);
    })
    
})

describe("Shopping Cart Story 3", () => {

    it("should add multiple product in cart", () => {
        const cart = new Cart();

        const soapName = "Dove";
        const soapUnitPrice = 39.99;
        const soapQuantity = 2;
        const soapProduct = new Product(soapName, soapUnitPrice, soapQuantity);
        cart.addProduct(soapProduct);

        const deoName = "Axe";
        const deoUnitPrice = 99.999;
        const deoQuantity = 2;
        const deoProduct = new Product(deoName, deoUnitPrice, deoQuantity);
        cart.addProduct(deoProduct);

        const EXPECTED_CART_SET = new Set<Product>();
        EXPECTED_CART_SET.add(soapProduct);
        EXPECTED_CART_SET.add(deoProduct);

        expect(cart.getCartItems).toEqual(EXPECTED_CART_SET);


    })



})

