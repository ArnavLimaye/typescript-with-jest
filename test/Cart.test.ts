import Cart from "../src/cart/Cart" 
import Product from "../src/cart/Product" 

describe("Shopping Cart Story 1", () => {

    it.only ("should exist", () => {

        const cart = new Cart();

        expect(cart).not.toEqual(null);  
    })

    it.only("should be empty cart", () => {

        const cart = new Cart();

        const actualCartSize = cart.getCartItemSet().size;

        expect(actualCartSize).toEqual(0);  
    })

    it.only ("should add a product", () => {

        const cart = new Cart();
        const name = "Dove";
        const unitPrice = 39.99;
        const quantity = 1;
        const soapProduct = new Product(name, unitPrice);
         
        cart.addProduct(soapProduct, quantity);
        const actualCartSet = cart.getCartItemSet();

        const EXPECTED_SOAP_PRODUCT = new Product(name, unitPrice);
        EXPECTED_SOAP_PRODUCT.setNoOfProducts(quantity);
        const EXPECTED_CART_SET = new Set<Product>();
        
        EXPECTED_CART_SET.add(EXPECTED_SOAP_PRODUCT);
        expect(actualCartSet).toEqual(EXPECTED_CART_SET);
        
    })

    it.only ("should add 5 dove soap products", () => {
        const cart = new Cart();
        const name = "Dove";
        const unitPrice = 39.99;
        const quantity = 5;
        const soapProduct = new Product(name, unitPrice);
         
        cart.addProduct(soapProduct, quantity);
        const actualCartQuantity = cart.getQuantity();

        expect(actualCartQuantity).toEqual(quantity);
        
    })

    it.only("should calculate total price of the cart", () => {
        const cart = new Cart();
        const soapName = "Dove";
        const soapUnitPrice = 10;
        const soapQuantity = 5;
        const soapProduct = new Product(soapName, soapUnitPrice);
        
        cart.addProduct(soapProduct, soapQuantity);
        const EXPECTED_TOTAL_CART_PRICE = 50;
        const actualTotalCartPrice = cart.getTotalPriceWithoutTaxes();

        expect(actualTotalCartPrice).toEqual(EXPECTED_TOTAL_CART_PRICE);
    })

})

describe("Shopping Cart Story 2", () => {

    it.only("should add additional quantity of a product to the cart", () => {

        const cart = new Cart();
        const soapName = "Dove";
        const soapUnitPrice = 39.99;
        const soapQuantity = 5;
        const soapProduct = new Product(soapName, soapUnitPrice);
        
        cart.addProduct(soapProduct, soapQuantity);
        const additionalSoapQuantity = 3;
        cart.addProduct(soapProduct, additionalSoapQuantity);
        const EXPECTED_SOAP_QUANTITY = 8;
        const actualSoapQuantity = cart.getQuantity();

        expect(actualSoapQuantity).toEqual(EXPECTED_SOAP_QUANTITY);

    })

    it.only("should calculate total cart price after adding additional quantity of a product", () => {
        const cart = new Cart();
        const soapName = "Dove";
        const soapUnitPrice = 39.99;
        const soapQuantity = 5;
        const soapProduct = new Product(soapName, soapUnitPrice);
        
        cart.addProduct(soapProduct, soapQuantity);
        const additionalSoapQuantity = 3;
        cart.addProduct(soapProduct, additionalSoapQuantity);
        const EXPECTED_TOTAL_CART_PRICE = 319.92;
        const actualTotalCartPrice = cart.getTotalPriceWithoutTaxes();

        expect(actualTotalCartPrice).toEqual(EXPECTED_TOTAL_CART_PRICE);
    })

})

describe("Shopping Cart Story 3", () => {

    it.only("should add multiple product in cart", () => {
        const cart = new Cart();

        const soapName1 = "Dove";
        const soapUnitPrice1 = 39.99;
        const soapQuantity1 = 2;
        const soapProduct1 = new Product(soapName1, soapUnitPrice1);
        cart.addProduct(soapProduct1, soapQuantity1);

        const deoName = "Axe";
        const deoUnitPrice = 99.99;
        const deoQuantity = 2;
        const deoProduct = new Product(deoName, deoUnitPrice);
        cart.addProduct(deoProduct, deoQuantity);

        const soapName2 = "Dove";
        const soapUnitPrice2 = 39.99;
        const soapQuantity2 = 3;
        const soapProduct2 = new Product(soapName2, soapUnitPrice2);
        cart.addProduct(soapProduct2, soapQuantity2);

        const EXPECTED_CART_SET = new Set<Product>();
        const EXPECTED_SOAP_PRODUCT = new Product("Dove", 39.99);
        EXPECTED_SOAP_PRODUCT.setNoOfProducts(5);

        const EXPECTED_DEO_PRODUCT = new Product("Axe", 99.99);
        EXPECTED_DEO_PRODUCT.setNoOfProducts(2);

        EXPECTED_CART_SET.add(EXPECTED_SOAP_PRODUCT);
        EXPECTED_CART_SET.add(EXPECTED_DEO_PRODUCT);

        let res = cart.getCartItemSet();

        expect(cart.getCartItemSet()).toEqual(EXPECTED_CART_SET);

    })

    it.only("should return total price before applying tax on multiple products", () => {

        const cart = new Cart();

        const soapName = "Dove";
        const soapUnitPrice = 39.99;
        const soapQuantity = 2;
        const soapProduct = new Product(soapName, soapUnitPrice);
        cart.addProduct(soapProduct, soapQuantity);

        const deoName = "Axe";
        const deoUnitPrice = 99.99;
        const deoQuantity = 2;
        const deoProduct = new Product(deoName, deoUnitPrice);
        cart.addProduct(deoProduct, deoQuantity);

        const EXPECTED_TOTAL_PRICE_BEFORE_TAX = 279.96;

        expect(cart.getTotalPriceWithoutTaxes()).toEqual(EXPECTED_TOTAL_PRICE_BEFORE_TAX);

    })


    it.only ("total Sales Tax when multiple products are added", () => {

        const cart = new Cart();
        const soapName = "Dove";
        const soapUnitPrice = 39.99;
        const soapQuantity = 2;
        const soapProduct = new Product(soapName, soapUnitPrice);
        cart.addProduct(soapProduct, soapQuantity);
        const deoName = "Axe";
        const deoUnitPrice = 99.99;
        const deoQuantity = 2;
        const doveProduct = new Product(deoName, deoUnitPrice);
        cart.addProduct(doveProduct, deoQuantity);

        const salesTaxRate=12.5;
        const EXPECTED_TOTAL_SALES_TAX = 35;
        cart.setSalesTaxMultiplier(salesTaxRate);
    
        const actualTotalSalesTax = cart.calculateTotalSalesTax();
                 expect(EXPECTED_TOTAL_SALES_TAX).toEqual(actualTotalSalesTax);
        })


    it.only ("should calculate total price of Shopping Cart having multiple products alongwith Sales Tax ", () => {

        const EXPECTED_TOTAL_PRICE_OF_CART_INCLUDING_TAXES = 314.96;
        const cart = new Cart();
        const soapName = "Dove";
        const soapUnitPrice = 39.99;
        const soapQuantity = 2;
        const soapProduct = new Product(soapName, soapUnitPrice);
        cart.addProduct(soapProduct, soapQuantity);
        const deoName = "Axe";
        const deoUnitPrice = 99.99;
        const deoQuantity = 2;
        const doveProduct = new Product(deoName, deoUnitPrice);
        cart.addProduct(doveProduct, deoQuantity);
            
 
        const actualTotalPriceOfCartIncludingTaxes = cart.calculateTotalPriceOfCartIncludingTaxes();
            expect(EXPECTED_TOTAL_PRICE_OF_CART_INCLUDING_TAXES).toEqual(actualTotalPriceOfCartIncludingTaxes);
        })

})

