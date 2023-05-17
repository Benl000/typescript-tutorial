import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
const invOne = new Invoice('Oded', 'work in spotify', 250);
const invTwo = new Invoice('Haim', 'work in wolt', 300);
const form = document.querySelector('form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
