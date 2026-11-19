// js/team.js: Team page (uses STAFF from data/staff.js)

const teamList = document.getElementById("team-list");
/*
 * 🐞 BUG 3: Team: the "Sort A to Z" button does nothing
 *
 * Symptom:  click Sort A to Z and the order never changes. (Strangely, clicking
 *           "Join the team" at the top of the page DOES sort the list.)
 *           There is NO error in the console.
 *
 * Fix: select the button by its id:
 *     const sortButton = document.getElementById('sort');
 */
const sortButton = document.getElementById("sort"); // Was: document.querySelector('.btn')

let team = [...STAFF];

function renderTeam() {
  if (team.length === 0) {
    teamList.innerHTML = '<p class="empty">No team members found.</p>';
    return;
  }
  teamList.innerHTML = team
    .map(
      (person) => `
    <article class="person">
      <div class="avatar" style="background:${person.color}" aria-hidden="true">${person.name[0]}</div>
      <div>
        <h3>${person.name}</h3>
        <p class="role">${person.role}</p>
      </div>
    </article>
  `,
    )
    .join("");
}

function sortByName() {
  team.sort((a, b) => a.name.localeCompare(b.name));
  renderTeam();
}

sortButton.addEventListener("click", sortByName);

renderTeam();
