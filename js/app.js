//<li><a href="#section5">Section 5</a></li>
console.log('loaded');

for (let i = 1; i < 5; i++) {
    let list = document.createElement('li');
    list.innerHTML = `<a href="#section${i}">Section ${i}</a>`
    
    document.querySelector(".navbar").appendChild(list);
  }

