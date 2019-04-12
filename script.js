let select = document.querySelector('select');
let list = document.querySelector('ul');
let h2 = document.querySelector('h2');

select.onchange = function() {
  let choice = select.value;
  let days;

  if (choice === 'February') {
    days = 28;
  } else if (choice === 'September' || choice === 'April' || choice === 'June' || choice === 'November') {
    days = 30;
  } else {
    days = 31;
  }

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h2.textContent = choice;
  for (let i = 1; i <= days; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
