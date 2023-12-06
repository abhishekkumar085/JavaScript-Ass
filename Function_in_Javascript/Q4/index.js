function calculateTax(income) {
    // Define tax rates and income ranges using closures
    function taxRate1() {
        const rate = 0.1;
        const range = 50000;
        return { rate, range };
    }

    function taxRate2() {
        const rate = 0.15;
        const range = 100000;
        return { rate, range };
    }

    function taxRate3() {
        const rate = 0.2;
        const range = Infinity;
        return { rate, range };
    }

    // Determine the applicable tax rate based on income
    let taxFunction;
    if (income <= taxRate1().range) {
        taxFunction = taxRate1();
    } else if (income <= taxRate2().range) {
        taxFunction = taxRate2();
    } else {
        taxFunction = taxRate3();
    }

    // Calculate and return the amount of tax
    const taxAmount = income * taxFunction.rate;
    return taxAmount;
}

// Test the function with various incomes
console.log(calculateTax(30000));  // Example income: $30,000
console.log(calculateTax(70000));  // Example income: $70,000
console.log(calculateTax(120000)); // Example income: $120,000
