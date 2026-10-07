// COTAÇÕES DE MOEDAS DO DIA
const USD = 4.98;
const EUR = 5.37;
const GBP = 6.61;

// OBTENDO OS ELEMENTOS
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// MANIPULAÇÃO DO INPUT AMOUNT
amount.addEventListener("input", () => {
    // console.log(amount.value)
    // EXPRESÃO EM REGEX
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// CAPTAÇÃO DO ENVENDO DE ENVIAR
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "USD")
            break

        case "EUR":
            convertCurrency(amount.value, EUR, "EUR")
            break

        case "GBP":
            convertCurrency(amount.value, GBP, "GBP")
            break
    }
}


//função para converter valores
function convertCurrency(amount, price, symbol) {
    //console.log(amount, price, symbol)
    try {

        //EXIBIR A COTAÇÃO DA MOEDA
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //CALCULA O TOTAL

        //result.textContent = formatCurrencyBRL(amount * price)
        result.textContent = `${formatCurrencyBRL(amount * price).replace("R$", "").trim()} Reais`

        //MOSTRAR O RESULTADO EM FOOTER

        footer.classList.add("show-result")

    } catch (error) {
        console.error(error)
    }
}

//FORMATAÇÃO PARA REAL BRASIELIRO
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}