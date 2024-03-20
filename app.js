const keto = document.getElementById("keto");
const halom = document.getElementById("halom");
const negy = document.getElementById("negy");
const button = document.getElementById("button");
const ot = document.getElementById("ot");

// 将 abc 声明为全局变量
var abc = 1;
var nev = "";


button.addEventListener("click", () => {
    if (abc === 1) {
        nev = negy.value;
        ot.textContent = "你好" + nev + "!";
        negy.value = "";
        abc = 2; // 更新 abc 的值
        keto.textContent += "你好" + nev + "!";
    } 
    else if (abc === 2) {
        
    }
});
