function syncTipInput() {
    document.getElementById("tipPercentageInput").value = document.getElementById("tipPercentage").value;
    calculateTip();
}

function syncTipSlider() {
    document.getElementById("tipPercentage").value = document.getElementById("tipPercentageInput").value;
    calculateTip();
}

function calculateTip() {
    const billTotal = parseFloat(document.getElementById("billTotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const currency = document.getElementById("currency").value;

    if (isNaN(billTotal) || isNaN(tipPercentage)) {
        document.getElementById("convertedTipAmount").value = "";
        document.getElementById("convertedTotalBill").value = "";
        return;
    }   if (isNaN(billTotal) || billTotal <= 0) {
        billError.textContent = "Please enter a valid bill amount.";
        tipAmountInput.value = '';
        totalWithTipInput.value = '';
        return;
    } else {
        billError.textContent = '';
    }
    

    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalBill = billTotal + tipAmount;

    let convertedTip = tipAmount;
    let convertedTotal = totalBill;
    if (currency === "INR") {
        convertedTip = tipAmount * 84.07; 
        convertedTotal = totalBill * 84.07;
    } else if (currency === "JPY") {
        convertedTip = tipAmount * 149.34; 
        convertedTotal = totalBill * 149.34;
    }

    document.getElementById("convertedTipAmount").value = `${getCurrencySymbol(currency)} ${convertedTip.toFixed(2)}`;
    document.getElementById("convertedTotalBill").value = `${getCurrencySymbol(currency)} ${convertedTotal.toFixed(2)}`;
}

function getCurrencySymbol(currency) {
    switch (currency) {
        case "INR":
            return "₹";
        case "JPY":
            return "¥";
        default:
            return "$";
    }
}
