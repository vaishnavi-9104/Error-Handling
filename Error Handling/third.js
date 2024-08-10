// You are 8eveloping a payment processing mo8ule for an e-commerce platform. Implement error
// han8ling for the payment transaction process.Create a function processPayment that simulates
// processing a payment transaction. The function shoul8 take payment 8etails (amount, car8 num4er,
// expiration 8ate) as parameters an8 thro! errors un8er certain con8itions
// 3 If the payment amount is not a positive num4er, thro! an error in8icating Invali8 payment amount.
// 3 If the car8 num4er is not provi8e8 or is not a vali8 cre8it car8 num4er, thro! an error in8icating Invali8
// car8 num4er.
// 3 If the expiration 8ate is not provi8e8 or is in the past, thro! an error in8icating Invali8 expiration 8ate.
function processPayment(amount, cardNumber, expirationDate) {
    // Check if the payment amount is a positive number
    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Invalid payment amount');
    }

    // Check if the card number is provided and is a valid number
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
        throw new Error('Invalid card number');
    }

    // Check if the expiration date is provided and is in the future
    if (!expirationDate || !isValidExpirationDate(expirationDate)) {
        throw new Error('Invalid expiration date');
    }

    // Simulate successful payment processing
    console.log('Payment processed successfully!');
}

function isValidExpirationDate(expirationDate) {
    // Expiration date should be in the format 'MM/YY'
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!regex.test(expirationDate)) {
        return false;
    }

    // Extract month and year
    const [month, year] = expirationDate.split('/').map(Number);
    const currentYear = new Date().getFullYear() % 100; // Last two digits of the year
    const currentMonth = new Date().getMonth() + 1; // Months are 0-based

    // Check if the expiration year is valid
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return false;
    }

    return true;
}

// Example usage:
try {
    processPayment(100, '1234567812345678', '12/25'); // Successful payment
    // processPayment(-50, '1234567812345678', '12/25'); // Throws Invalid payment amount
    // processPayment(100, '12345678', '12/25'); // Throws Invalid card number
    // processPayment(100, '1234567812345678', '01/20'); // Throws Invalid expiration date
} catch (error) {
    console.error(error.message);
}
