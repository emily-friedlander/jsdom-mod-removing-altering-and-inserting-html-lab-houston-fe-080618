/* Enter the code to remove the main node element under this comment */
// body.removeChild(body.querySelector('#main'));
document.querySelector("main#main").remove();
/* Create your new element here and assign it to newHeader */
// const newHeader = null;
// document.body.appendChild(h1)
// document.createElement(h1)
var h = document.createElement ("H1") (id='victory');
var t = document.createTextNode ("Emily is the champion");
h.appendChild(t);
document.body.appendChild(h);