const changetext = document.getElementById("changetext")
changetext.addEventListener("click",()=>{
    // const h1 = document.querySelector("h1")
    // h1.textContent="hello world"  
    window.document.body.style.background="black" 
})
const change = document.getElementById("change")
change.addEventListener("click",()=>{
    // const h1 = document.querySelector("h1")
    // h1.textContent="hello world"  
    window.document.body.style.background="white" 
})
 
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
console.log(userName)

submitBtn.addEventListener("click",(e)=>{
    const userName =document.getElementById("userName").value;
    e.preventDefault();
    output.innerHTML=userName
})
