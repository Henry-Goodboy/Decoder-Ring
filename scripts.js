let str = prompt('Type Hello World')

for (let i = 0; i < str.length; i++) {
  let n = str.charCodeAt(i);
    console.log(n);
    document.write(`${n}`);
}
