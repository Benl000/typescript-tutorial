import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice('Oded', 'work in spotify', 250);
const invTwo = new Invoice('Haim', 'work in wolt', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('form');
const type = document.querySelector('#input');
const toForm = document.querySelector('#toForm');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
