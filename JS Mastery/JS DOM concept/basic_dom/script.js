const h1 = document.getElementById('h1-tag');
const p = document.getElementById("p-tag");
const btn = document.getElementById("btn");

function changeText() {
    h1.textContent = "hello h1 from JS";
    p.textContent = "Hello p from JS";
}


btn.addEventListener('click', changeText);
