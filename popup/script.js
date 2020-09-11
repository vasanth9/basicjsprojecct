 const o = document.getElementById("o");
 const c = document.getElementById("c");
 const container = document.getElementById("container");
 o.addEventListener("click", () => {
     container.classList.add('active');

 });
 c.addEventListener("click", () => {
     container.classList.remove('active');

 })