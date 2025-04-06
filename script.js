export let titleElement = document.getElementById("title");

 console.log(titleElement);


 //<h2 id ="sub-heading">This is a test</h2>
//<p class = "color">My favorite color is Orange.</p>
//<button id = "submit">submit button</button>


let descriptions = document.querySelector("#sub-heading");
console.log(document.querySelector("sub-heading"));

let descriptions = document.querySelector(".color");
console.log(document.querySelector(".color"));

let descriptions = document.querySelector("#submit");
console.log(document.querySelector("#submit"));

//<p class ="fruit">This is a banana.</p>
//<p class ="fruit">This is a banana.</p>
//<p class ="fruit">This is a banana.</p>

let descriptions = document.querySelectorAll("fruit");
console.log(document.querySelectorAll("fruit"));