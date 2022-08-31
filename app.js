/**
 ** [VAT Calculator App]
*? Select DOM Elemnts
*/

const vatCalcForm = document.getElementById("vatCalc_form");
const netPrice = document.getElementById("net_price");
const vatRate = document.getElementById("vat_rate");
const vatInclusivePrice = document.getElementById("vatInclusive_price");
const resetBtn = document.getElementById("reset");

vatCalcForm.addEventListener("submit", VATCalculator);
resetBtn.addEventListener("click", resetvatCalcForm);

function VATCalculator(e) {
    e.preventDefault();

    let netPriceValue = netPrice.value.trim();
    let vatRateValue = vatRate.value.trim();

    inputsValidation(netPriceValue, vatRateValue);

    let finalAmount = VATInclusiveAmount(Number(netPriceValue), Number(vatRateValue));
    vatInclusivePrice.value = finalAmount;
};


function inputsValidation(netPriceInput, vatRateInput) {
    if (netPriceInput === "" || isNaN(netPriceInput)) {
        netPrice.classList.add("error");

        setTimeout(_ => {
            netPrice.classList.remove("error");
        }, 1500);

        netPrice.value = "";
    };

    if (vatRateInput === "" || isNaN(vatRateInput)) {
        vatRate.classList.add("error");

        setTimeout(_ => {
            vatRate.classList.remove("error");
        }, 1500);

        vatRate.value = "";
    };
};

function VATInclusiveAmount(price, rate) {
    let totalAmount  = price + (price * (rate / 100));
    return parseFloat(totalAmount).toFixed(2);
};

function resetvatCalcForm() {
    netPrice.value = "";
    vatRate.value = "";
    vatInclusivePrice.value = "";
};