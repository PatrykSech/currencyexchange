let formElement = document.querySelector(".js-form");
let formAmount = document.querySelector(".js-amount");
let formCurrency = document.querySelector(".js-currency");
let formResult = document.querySelector(".js-result");

let USD = 4.5;
let AUD = 3.1;
let GBP = 5.5;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = formAmount.value;
    let currency = formCurrency.value;

    let result;

    switch (currency) {
        case 'USD':
            result = amount / USD;
            break;

        case 'AUD':
            result = amount / AUD;
            break;

        case 'GBP':
            result = amount / GBP;
            break;
    }

    formResult.innerText = `${result.toFixed(2)} ${currency}`

});