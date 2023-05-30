const itemInput = document.getElementById('iteminput');
const add = document.getElementById('additem');
const itemsContainer = document.getElementById('itemscontainer');
const errorText = document.getElementById('errorText');
const clear = document.getElementById('clear');

const addItem = () => {
  if (itemInput.value === '') {
    errorText.innerHTML = "Input Field is Empty";
  } else {
    errorText.innerHTML = "";
    let items = document.createElement('div');
    items.id = 'items';
    itemsContainer.appendChild(items);
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = 'checkbox';
    items.appendChild(checkbox);
    let item = document.createElement('p');
    item.style.cursor = 'pointer';
    item.id = 'item';
    item.innerHTML = itemInput.value;
    itemInput.value = '';
    items.appendChild(item);
    let editEl = document.createElement('p');
    editEl.innerHTML = 'Edit';
    editEl.id = 'edit';
    let buttonDiv = document.createElement('buttonDiv');
    buttonDiv.id = ('buttons');
    buttonDiv.appendChild(editEl);
    items.appendChild(buttonDiv);
    clear.style.display = 'block';
    items.addEventListener('click', function(e) {
      target = e.target;
      if (target.id === 'edit') {
        itemInput.value = item.innerHTML;
        items.style.display = 'none';
      }
    });
    items.addEventListener('dblclick', function(e) {
      target = e.target;
      if (target.id === 'item') {
        this.style.textDecoration = 'line-through';
      }
    });
  }
};

const clearChecked = () => {
  const checkboxes = document.querySelectorAll('#items input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkbox.parentNode.remove();
    }
  });
};

clear.addEventListener('click', clearChecked);
add.addEventListener('click', addItem);

// Add event listener for Enter key press
itemInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addItem();
    }
  });