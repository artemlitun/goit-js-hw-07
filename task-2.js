const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

let list = document.getElementById('ingredients');

const listItems = ingredients.reduce((acc, ingredients) =>{
    let li = document.createElement('li')
    li.textContent = ingredients
    acc.push(li)
    
    return acc

}, [])

list.append(...listItems)

console.log(listItems);
