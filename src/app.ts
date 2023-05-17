import { Invoice } from "./classes/invoice.js"

const invOne = new Invoice('Oded', 'work in spotify', 250)
const invTwo = new Invoice('Haim', 'work in wolt', 300)


let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector('form') as HTMLFormElement;

const type = document.querySelector('#input') as HTMLInputElement;
const toForm = document.querySelector('#toForm') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;