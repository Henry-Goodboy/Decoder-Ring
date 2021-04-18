

// prompt user for string, transform string into unicode.
let secretRaw = prompt('Insert secret message here.')
let info = 'This is your secret unicode: ';
const para = document.querySelector('p');


//function allows the transformation to happen via a button.
function toUnicode() {
  for (let i = 0; i < secretRaw.length; i++) {
    let n = secretRaw.charCodeAt(i);
    info += n + ', ';
    para.textContent = info;

  }
}

//Guess what? It doesn't work... it merely returns line 5
console.log(info);


// let secretNum = new Array();
// document.getElementById("demo").innerHTML = cars;





