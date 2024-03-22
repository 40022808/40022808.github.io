const keto = document.getElementById("keto");
const halom = document.getElementById("halom");
const negy = document.getElementById("negy");
const button = document.getElementById("button");
const ot = document.getElementById("ot");





alert("目前版本:0.0.2");



// 将 abc 声明为全局变量
var abc = "1";
var nev = "";


button.addEventListener("click", () => {
    if (abc === "1") {
        nev = negy.value;
        ot.textContent = "你好" + nev + "!";
        negy.value = "";
        abc = "2"; // 更新 abc 的值
        keto.innerHTML  = "你好" + nev + "!<br>你可以进行以下操作:";
        setTimeout(() => keto.innerHTML += "<br>》解除铁门的电子锁<br>", 1000);
        setTimeout(() => keto.innerHTML += "》释放A药剂<br>", 2000);
        setTimeout(() => keto.innerHTML += "》释放B药剂<br>", 3000);
        setTimeout(() => keto.innerHTML += "（在输入区输入操作就可以执行了）", 3500);
        
    } 
    else if (abc === "2") {
        let set = negy.value;
        negy.value = "";
        if (set == "解除铁门的电子锁"){
            console.log("a1")
            abc = "a1"; // 更新 abc 的值
        }
        else if (set == "释放A气体") {
            console.log("a2")
            abc = "a2"; // 更新 abc 的值
        }
        else if (set == "释放B气体"){
            console.log("a3")
            abc = "a3"; // 更新 abc 的值
        }
        else {
            ot.textContent = "命令错误!"
            
        }

    }
});

