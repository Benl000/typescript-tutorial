import { Invoice } from "./classes/invoice.js"
import { Payment } from "./classes/Payment.js"
import { ListTamplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js"

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!
const list = new ListTamplate(ul)

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

    list.render(doc,type.value,'end')
})