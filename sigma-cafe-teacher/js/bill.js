// js/bill.js: Split the Bill page (uses Rounding from lib/rounding.js)

const billInput = document.getElementById("bill");
const tipSelect = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const calcButton = document.getElementById("calc");
const message = document.getElementById("message");

const receipt = {
  bill: document.getElementById("r-bill"),
  tipLabel: document.getElementById("r-tip-label"),
  tip: document.getElementById("r-tip"),
  total: document.getElementById("r-total"),
  each: document.getElementById("r-each"),
};

function formatRM(amount) {
  return "RM " + Number(amount).toFixed(2);
}

/*
 * 🐞 BUG 1: Split the bill shows "RM NaN" for Total and Each person pays
 *
 * Symptom:  bill 80, tip 15%, 2 people  ->  Bill RM 80.00, Tip RM 12.00,
 *           Total RM NaN, Each RM NaN.  There is NO error in the console.
 *
 * Fix: use the `.value` property:
 *     const total = Rounding.toNearest5Sen(bill + tipAmount).value;
 */
function calculate() {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipSelect.value);
  const people = Number(peopleInput.value);

  if (billInput.value === "" || peopleInput.value === "") {
    message.textContent = "Enter the bill amount and the number of people.";
    return;
  }
  message.textContent = "";

  const tipAmount = (bill * tipPercent) / 100;
  // Malaysian cash rounding: nearest 5 sen
  const total = Rounding.toNearest5Sen(bill + tipAmount).value; // Was: no .value
  const perPerson = total / people;

  receipt.bill.textContent = formatRM(bill);
  receipt.tipLabel.textContent = `Tip (${tipPercent}%)`;
  receipt.tip.textContent = formatRM(tipAmount);
  receipt.total.textContent = formatRM(total);
  receipt.each.textContent = formatRM(perPerson);
}

calcButton.addEventListener("click", calculate);
