
// const header=document.getElementById("header")
// console.log(header)
// header.style.color="blue";
 
// const classSelector = document.getElementsByClassName("classSelector");
// const arr = Array.from(classSelector)
// console.log(classSelector)
// classSelector[0].style.color="black"
// classSelector[1].style.color="black"
// classSelector[2].style.color="black"
// arr.forEach((ele)=> {
//     ele.style.color="blue"
// })
//  const h3 = document.getElementsByTagName("h3")
//  console.log(h3)
//  const arrr = Array.from(h3)
//  arrr.forEach((ele) => {
//     ele.style.color="grey"
//     ele.style.background="red"
//  });
// const classSelector = document.querySelector(".classSelector")
// console.log(classSelector)
// classSelector.style.color="green"

// const h3 = document.querySelector("h3")
// console.log(h3)
// h3.style.color="green"
// const classSelector = document.querySelectorAll(".classSelector")
// console.log(classSelector)

// classSelector.forEach((ele)=>{
//     ele.style.color="yellow"
// })
// const h3= document.querySelectorAll("h3")
// h3.forEach((ele)=>{
//     ele.style.color="green"
// })
const header= document.querySelector("#header")
const main = document.getElementById("main")
const outer = document.getElementById("outer")
header.textContent="hello rudra! , who are you?"
main.innerHTML="<p> this is rudra </p>"
const inner = document.createElement("div")
inner.setAttribute("class","inner")
inner.innerHTML = "<p>hi</p>"
outer.appendChild(inner)
