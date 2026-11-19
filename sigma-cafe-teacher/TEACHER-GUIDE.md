# Debug Lab: teacher guide

Three bugs, three pages, three independent fixes. None of them prints an error in the console.

The goal is to teach students to reach for `console.log` _because it is the fastest way to find the problem_,
not because they were told to. So in every bug the code on the page looks correct. The cause is in
something that only exists while the program runs. Staring at the file is a slow strategy, and
students find that out in the first few minutes.

## The three questions

Each bug teaches one question that `console.log` answers.

| Bug | Page           | Question                                            | Why staring fails                                                                                                            |
| --- | -------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 1   | Split the bill | What is actually **in** this variable?              | The value comes from a library written by someone else. Nothing in the page's code says what it returns.                     |
| 2   | Menu           | What **exactly** is in this string?                 | The filter, the data and the button labels are all correct. The problem is invisible whitespace that only exists at runtime. |
| 3   | Team           | Did this code **run**, and which element did I get? | The sort code is correct. The bug is in the line that finds the button.                                                      |

## Bug 1: Split the bill

**Symptom.** Bill 80, tip 15%, 2 people gives Total `RM NaN` and Each `RM NaN`. Bill and Tip are correct.

**Where students waste time.** Re-reading the tip formula and the `formatRM` function. Both are fine.

**Trail.**

```js
const total = Rounding.toNearest5Sen(bill + tipAmount);
console.log("total:", total); // total: {value: 92, adjustment: 0, step: 0.05}
```

`total` is an object, not a number. `Number({...})` is `NaN`, which becomes "RM NaN".

**Root cause.** The library function returns `{ value, adjustment, step }`.

**Fix.** `Rounding.toNearest5Sen(bill + tipAmount).value`. Students must not edit `lib/`.

**Real-world lesson.** You often use code you did not write. Do not guess what it returns. Print it.

## Bug 2: Menu filter

**Symptom.** The page opens with all 8 items. Click Coffee, Tea, Food or even **All** and you get "No items found."

**Where students waste time.** Rewriting `filterBy`, checking the spelling in `data/menu.js`, and
wondering why All fails (it makes the bug feel impossible).

**Trail.** Put the logs at the top of `filterBy`, then click **All**:

```js
console.log("category:", category); // looks almost normal: the word sits on its own line
console.log(category === "all"); // false  <- the real clue
console.log(category.length); // 19, but "All" has 3 letters
console.log(JSON.stringify(category)); // "\n        All\n      "
```

Be honest with students about the first log. It prints `category:`, a line break, then the word, which many people read as
plain "All". The clue is only faint. The moment it clicks is the second log: the console shows All, yet `=== 'all'`
is `false`. That contradiction makes them look closer, and `.length` or `JSON.stringify` then show the hidden characters.

**Root cause.** `button.textContent` includes the line breaks and indentation of the HTML.

**Fix.** `filterBy(chip.textContent.trim())`.

**Real-world lesson.** Strings can hold things you cannot see. Log them.

## Bug 3: Team page

**Symptom.** Click **Sort A to Z** and nothing happens. Clicking **Join the team** at the top _does_ sort the list.

**Where students waste time.** Re-reading `sortByName` and `addEventListener`. Both are correct.

**Trail.**

```js
function sortByName() {
  console.log('sortByName ran');   // does not print when Sort is clicked
  ...
}
console.log('sortButton:', sortButton);   // <a class="btn btn-light" href="#join">Join the team</a>
```

Two clues: the handler does not run for the button they clicked, and the element found is the wrong one.
Clicking "Join the team" does print the line, which tells them the listener is attached to the wrong element.

**Root cause.** `querySelector('.btn')` returns the first match, and "Join the team" comes first on the page.

**Fix.** `document.getElementById('sort')`.

**Real-world lesson.** If an action does nothing, first ask whether the code is even running.

## Demo for the 10-minute console.log segment

Demo on the **home page**, which has no bug, so you do not give an answer away.
Open `index.html`, open the console, and show the three questions:

```js
// 1. What is in it?
console.log("links on this page:", document.querySelectorAll("a").length);
console.log("first link:", document.querySelector("a"));

// 2. What EXACTLY is in it?
console.log("brand text:", document.querySelector(".brand").textContent);
console.log(JSON.stringify(document.querySelector(".brand").textContent));

// 3. Did it run?  (type this in the console, then click a signboard link)
document
  .querySelector(".signboard")
  .addEventListener("click", () => console.log("signboard clicked"));
```

Do **not** demo `textContent` on a button, `querySelector` with a shared class, or what a library returns:
those are the three bugs. The point of the demo is the habit: **when it looks right but acts wrong, make it show you.**

## Marking the issues in the Google chat

A good issue has all of these:

- a real `console.log` line pasted in "What I logged", and the output it printed;
- the root cause in one sentence (for example "the library returns an object, so `total` was not a number");
- a fix that is a changed line, not a rewrite.
  A weak issue says "I looked at the code and changed some stuff". Ask for the logged output.
  The "What I logged" section is how you tell who used the console and who got lucky.

## If someone finishes early

- Find a **second** way to fix each bug (Bug 2: normalise inside `filterBy` instead).
- Add one more log that proves the fix works.
- Remove all `console.log` lines and check the diff is small.
