const keto = document.getElementById("keto");
const halom = document.getElementById("halom");
const negy = document.getElementById("negy");
const button = document.getElementById("button");
const ot = document.getElementById("ot");


button.addEventListener("click",() => {
    let num = negy.value;
    ot.textContent = (num);
    negy.value= "";
})

