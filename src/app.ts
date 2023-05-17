import { Invoice } from "./classes/invoice.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"

const invOne = new Invoice('Oded', 'work in spotify', 250)
const invTwo = new Invoice('Haim', 'work in wolt', 300)

const form = document.querySelector('form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter

    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value,
            details.value,
            amount.valueAsNumber)
    }
    else {
        doc = new Payment(tofrom.value,
            details.value,
            amount.valueAsNumber)
    }

    console.log(doc)
})