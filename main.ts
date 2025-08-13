const resp = await fetch("http://localhost:8000/api/book/1");
const book = await resp.json();
console.log(book);