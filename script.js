const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}


const number = document.querySelectorAll(".number")

numbers.foreach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value)
  })
})
