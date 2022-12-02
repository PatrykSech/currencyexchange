const calculateResults = (amount, currency) => {
    const USD = 4.5;
    const AUD = 3.1;
    const GBP = 5.5;

    switch (currency) {
        case 'USD':
            return amount / USD;

        case 'AUD':
            return amount / AUD;

        case 'GBP':
            return amount / GBP;
    }
};

const upDateResultsText = (amount, result, currency) => {
    const formResult = document.querySelector(".js-result");

    formResult.innerText = `${result.toFixed(2)} ${currency}`
};

const onFormSubmit = (event) => {
        event.preventDefault();
        const formAmount = document.querySelector(".js-amount");
        const formCurrency = document.querySelector(".js-currency");

        const amount = formAmount.value;
        const currency = formCurrency.value;

        let result = calculateResults(amount, currency);

        upDateResultsText (amount, result, currency);
};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
};

init ();
