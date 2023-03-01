const leftBtms = document.querySelectorAll(".left button")
const rightBtms = document.querySelectorAll(".right button")
const leftInputData = document.querySelector("#left-input-date");
const rightInputData = document.querySelector("#right-input-date");
const leftResult = document.querySelector(".left-result")
const rightResult = document.querySelector(".right-result")

const url = 'https://api.exchangerate.host/latest?';
let baseData = 'AZN';
let symbolData = 'USD';

leftBtms.forEach(btn => {
    btn.addEventListener("click", (e) => {
        leftBtms.forEach(item => {
            item.classList.remove("active")
        })
        baseData = e.target.innerText;
        onlineConvert(e)

    })
})


rightBtms.forEach(btn => {
    btn.addEventListener("click", (e) => {
        rightBtms.forEach(item => {
            item.classList.remove("active")
        })
        baseData = e.target.innerText;
        onlineConvert(e)

    })
})

const onlineConvert = (e) => {
    e.target.classList.add("active")
    fetch(`${url}base=${baseData}&symbols=${symbolData}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            rightInputData.value = (leftInputData.value * data.rates[symbolData]).toFixed(2)
            leftResult.innerText = `1 ${baseData} = ${(data.rates[symbolData]).toFixed(2)} ${symbolData}`
            rightResult.innerText = `1 ${symbolData} = ${(1 / data.rates[symbolData]).toFixed(2)}`

        })
}







// leftResult.innerText = `1 ${baseData} = ${(data.rates[SymbolData]).toFixed(2)} ${symbolDate}`
// rightResult.innerText = `1 ${SymbolData} = ${(1 / data.rates[SymbolData]).toFixed(2)}`



