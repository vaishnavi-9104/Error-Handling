// Yo are working on a ser athentication modle for a we+ application Implement error handling for the
// login processCreate a fnction login that simlates the ser login process The fnction shold take the
// sername and password as parameters and throw errors nder certain conditions#
// ' If the sername is not provided, throw an error indicating Username is reqired
// ' If the password is not provided, throw an error indicating Password is reqired
// ' If the sername and password do not match any valid credentials, throw an error indicating Invalid
// sername or password
function login(username, password) {
    // Simulate valid credentials
    const validUsername = 'user123';
    const validPassword = 'pass123';

    // Check if username is provided
    if (!username) {
        throw new Error('Username is required');
    }
    
    // Check if password is provided
    if (!password) {
        throw new Error('Password is required');
    }
    
    // Check if username and password match valid credentials
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
    // login('', 'pass123'); // Throws Username is required
} catch (error) {
    console.error(error.message);
}
