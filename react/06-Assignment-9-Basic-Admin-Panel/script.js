const url = 'https://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
const tableBody = document.getElementById('table-body');
const infoContent = document.getElementById('info-content');
let userData = filteredUserData = [];
let activeUserId = null;

fetch(url)
  .then((response) => response.json())
  .then((users) => {
    userData = users;
    renderUsers(users, true);
  });

function renderUsers(users, isFirstTime, searchValue) {
  tableBody.innerHTML = '';
  var reg = new RegExp(searchValue, 'gi');

  users.map((user, i) => {
    tableBody.innerHTML += `
    <tr class="data-row ${(isFirstTime && i === 2) || user.id === activeUserId ? 'active' : ''}" onclick="userRowClicked(this)">
      <td class="column1">${user.id}</td>
      <td class="column2">${user.firstName.replace(reg, str => '<span>' + str + '</span>')}</td>
      <td class="column3">${user.lastName.replace(reg, str => '<span>' + str + '</span>')}}</td>
      <td class="column4">${user.email.replace(reg, str => '<span>' + str + '</span>')}}</td>
      <td class="column5">${user.phone.replace(reg, str => '<span>' + str + '</span>')}}</td>
    </tr>`

    if (isFirstTime && i === 2) {
      activeUserId = user.id;
      renderDetails(user)
    }
  })
}

function renderDetails(user) {
  infoContent.innerHTML = `
    <div><b>User selected:</b>${user.firstName} ${user.lastName}</div>
    <div><b>Description: </b><textarea cols="50" rows="5" readonly>${user.description}</textarea></div>
    <div><b>Address:</b> ${user.address.streetAddress}</div>
    <div><b>City:</b> ${user.address.city}</div>
    <div><b>State:</b> ${user.address.state}</div>
    <div><b>Zip:</b> ${user.address.zip}</div>`
}

function userRowClicked(clickedRow) {
  console.log('clicked')
  const prevActiveUser = document.getElementsByClassName('active')[0];
  prevActiveUser.classList.remove('active');
  clickedRow.classList.add('active');
  const clickedUserId = activeUserId = +clickedRow.querySelector('.column1').innerHTML;
  const clickedRowData = userData.find((user) => user.id === +clickedUserId)
  renderDetails(clickedRowData);
}

function onSearchInput(searchValue) {
  searchValue = searchValue.toLowerCase();
  filteredUserData = userData.filter(user => user.firstName.toLowerCase().includes(searchValue) || user.lastName.toLowerCase().includes(searchValue) || user.email.toLowerCase().includes(searchValue) || user.phone.toLowerCase().includes(searchValue))
  renderUsers(filteredUserData, false, searchValue);
}