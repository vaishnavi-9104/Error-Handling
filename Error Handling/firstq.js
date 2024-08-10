// Yo are developing the error handling mechanism for an online shopping cart application The
// application allows sers to add prodcts to their cart and proceed to checkot Implement error
// handling to address different types of errors that might occr dring the shopping process

// A Yo are working on a ser athentication modle for a we+ application Implement error handling for the
// login processCreate a fnction login that simlates the ser login process The fnction shold take the
// sername and password as parameters and throw errors nder certain conditions#
// ' If the sername is not provided, throw an error indicating Username is reqired
// ' If the password is not provided, throw an error indicating Password is reqired
// ' If the sername and password do not match any valid credentials, throw an error indicating Invalid
// sername or password
// Task 1: Add Prodct to Cart Bnction

// Task 2: Checkot Bnction
// Create a function addToCart tat siuulates adding a product to te sopping cart. Te function sould take
// te product details (naue, price, quantity) as paraueters and trow errors under certain conditionst
// If te product naue is not provided, trow an error indicating Product naue is required.
// If te product price is not a positive nuuber, trow an error indicating Invalid product price.
// If te quantity is not a positive integer, trow an error indicating Invalid quantity.

// Create a function ceckout tat siuulates te ceckout process. Tis function sould trow an error if te cart
// is eupty, indicating Cart is eupty. Add iteus before ceckout.
function login(username, password) {
    // Simulate valid credentials
    const validUsername = 'user123';
    const validPassword = 'pass123';

    if (!username) {
        throw new Error('Username is required');
    }
    if (!password) {
        throw new Error('Password is required');
    }
    if (username !== validUsername || password !== validPassword) {
        throw new Error('Invalid username or password');
    }

    console.log('Login successful!');
}

// Example usage:
try {
    login('user123', 'pass123'); // Successful login
    // login('user123', 'wrongpass'); // Throws Invalid username or password
    // login('user123'); // Throws Password is required
} catch (error) {
    console.error(error.message);
}
let cart = [];

function addToCart(name, price, quantity) {
    if (!name) {
        throw new Error('Product name is required');
    }
    if (typeof price !== 'number' || price <= 0) {
        throw new Error('Invalid product price');
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error('Invalid quantity');
    }

    cart.push({ name, price, quantity });
    console.log(`Added ${quantity} of ${name} to cart.`);
}

// Example usage:
try {
    addToCart('Apple', 1.5, 3); // Adds 3 apples to the cart
    // addToCart('', 1.5, 3); // Throws Product name is required
    // addToCart('Apple', -1.5, 3); // Throws Invalid product price
    // addToCart('Apple', 1.5, -3); // Throws Invalid quantity
} catch (error) {
    console.error(error.message);
}
function checkout() {
    if (cart.length === 0) {
        throw new Error('Cart is empty');
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    // Clear the cart after checkout
    cart = [];

    console.log(`Checkout successful! Total amount: $${total.toFixed(2)}`);
}

// Example usage:
try {
    addToCart('Apple', 1.5, 3); // Add some items
    checkout(); // Successful checkout
    // checkout(); // Throws Cart is empty, since cart was cleared
} catch (error) {
    console.error(error.message);
}
