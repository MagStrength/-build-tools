import { printError, printResult } from './printResult.js'
import { formatError } from './printError'
import getDateDiff from './getDateDiff.js'


const form = document.getElementById("datecalc")

form.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)

    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')

    if (!firstDate || !secondDate) {
        printError('Oooops -> put date')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        printResult(dateDiff)
    }
}
