const elements = document.querySelectorAll('.point');

for(let i = 0; i < elements.length; i++){
    console.log(elements[i].textContent);

    localStorage.setItem("elemento", elements[i]);
}