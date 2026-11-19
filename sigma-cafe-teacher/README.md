# Sigma Café: Debug Lab (TEACHER COPY, all bugs fixed)

> This is the solved version. Each bug has a `🐞 BUG` comment block above the fixed code with the symptom,
> the console.log trail, the root cause and the fix. Read `TEACHER-GUIDE.md` for the walkthrough.
> Do not share this folder with students.


Sigma Café is a small café website. It has three pages, and **each page has one bug**.
Your job is to find each bug, fix it, and report it as a GitHub issue.

You are working solo, and you cannot ask for help during the lab. Your tool is `console.log()`.

## Project structure

```
sigma-cafe/
├── index.html            Home page
├── pages/
│   ├── bill.html         Split the bill
│   ├── menu.html         Menu
│   └── team.html         Team
├── css/
│   ├── base.css          Colours, fonts, reset
│   └── components.css    Buttons, cards, forms
├── js/
│   ├── bill.js           Logic for the bill page
│   ├── menu.js           Logic for the menu page
│   └── team.js           Logic for the team page
├── data/
│   ├── menu.js           The menu items
│   └── staff.js          The team members
├── lib/
│   └── rounding.js       A library written by someone else (do not edit)
├── assets/images/        Logo and illustrations
├── .github/              GitHub settings (hidden folder)
└── README.md             You are here
```

Each page has its own JavaScript file. A bug on one page never needs a fix on another.
You should not need to edit anything in `lib/`, `css/` or `data/`.

## Setup

1. **Fork** this repository (button at the top right of the GitHub page).
2. **Clone your fork** (use your own username, not mine):
   ```
   git clone https://github.com/<your-username>/sigma-cafe.git
   cd sigma-cafe
   code .
   ```
3. Open `index.html` with **Live Server** (right-click, Open with Live Server).
4. Open the browser console: press **F12**, then click the **Console** tab.
5. **Turn on Issues in your fork.** GitHub switches Issues off on forks.
   Go to your fork, then Settings, then General, then scroll to Features and tick **Issues**.

## The bugs

Nothing crashes and nothing turns red in the console. Each page runs, but gives a wrong result.

| Page | What you will see |
| --- | --- |
| Split the bill | Enter 80, tip 15%, 2 people, then click Calculate. Total and Each person pays do not show a real amount. |
| Menu | The page starts with all 8 items. Click any category button and the list changes to the wrong thing. |
| Team | Click the Sort A to Z button. The order does not change. |

The code on each page looks reasonable. Staring at it will not tell you what is wrong,
because the problem is in what the program is *doing*, not in how the code looks.

## How to debug

1. **Reproduce it.** Make the bug happen every time with the same steps.
2. **Isolate it.** Decide which file to look at. Each page has its own file in `js/`.
   Do not read the same lines over and over. If the code looks right, make it show you what it is doing.
3. **Inspect it.** Add `console.log()` lines to see what is really going on. A log can answer three questions:
   - *What is actually in this variable?* `console.log('result:', result);`
   - *Did this code run at all?* `console.log('handler ran');`
   - *Which element did I get?* `console.log(button);`

   Use a label so you can tell the lines apart in the console.
4. **Fix it.** Change the line that is wrong. Save and reload.
5. **Verify it.** Repeat the steps from step 1. When it works, delete your `console.log` lines.

Guessing is slower than logging. If you are not sure what a value is, print it.

## Report each bug as a GitHub issue

File **one issue per bug** in your own fork, so three issues in total.

1. In your fork, click the **Issues** tab, then **New issue**.
2. If you see a **Bug report** option, click **Get started** next to it.
   The form is filled in for you.
3. If the issue is blank, copy the template below into it.
4. Fill in every section. Paste your real `console.log` lines and what they printed.
5. Click **Submit new issue**, copy the URL, and paste it in the Google chat.

### Issue template (copy this if your issue is blank)

````markdown
## Summary
One sentence: what is wrong?

## Page
Split the bill / Menu / Team

## Steps to reproduce
1.
2.
3.

## Expected behaviour
What should happen?

## Actual behaviour
What happens instead? Paste the wrong numbers or describe the screen.

## What I logged
The console.log lines I added and what they printed.

## Root cause
Which line is wrong and why?

## Fix
The corrected line(s).
````

Use this issue title format: `Bug: <page> - <short description>`

## Time check

| Minutes | What to do |
| --- | --- |
| 0 to 5 | Fork, clone, run the site |
| 5 to 35 | Find and fix all three bugs |
| 35 to 50 | Write your three issues |
| 50 to 60 | Paste the links in chat |
