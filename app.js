const keto = document.getElementById("keto");
const halom = document.getElementById("halom");
const negy = document.getElementById("negy");
const button = document.getElementById("button");
const ot = document.getElementById("ot");





alert("目前版本:0.0.5");



// 将 abc 声明为全局变量
var abc = "1";
var nev = "";


button.addEventListener("click", () => {
    if (abc === "1") {
        nev = negy.value;
        ot.textContent = "你好" + nev + "!";
        negy.value = "";
        abc = "2"; // 更新 abc 的值
        halom.textContent = "在输入区输入操作就可以执行了";
        keto.innerHTML  = "你好" + nev + "!<br>你可以进行以下操作:";
        setTimeout(() => keto.innerHTML += "<br>》解除铁门的电子锁<br>", 1000);
        setTimeout(() => keto.innerHTML += "》释放A气体<br>", 2000);
        setTimeout(() => keto.innerHTML += "》释放B气体<br>", 3000);
        setTimeout(() => keto.innerHTML += "（在输入区输入操作就可以执行了）", 3500);
        
    } 
    else if (abc === "2") {
        let set = negy.value;
        negy.value = "";
        if (set == "解除铁门的电子锁"){
            abc = "end-1"; // 更新 abc 的值
            ot.textContent = "已解开门锁"
            setTimeout(() => keto.innerHTML = "你成功了", 800);
            setTimeout(()=> keto.innerHTML += "，不过当你把门打开的时候，你看到了一群机器人。", 1500);
            setTimeout(()=> keto.innerHTML += "它们胸前的扫描光束照到你了，紧接着它们开始朝着你开枪。", 3500);
            setTimeout(()=> keto.innerHTML += "随着几声枪响，你感觉到疼痛而且意识也开始模糊了起来。", 5500);
            setTimeout(()=> keto.innerHTML += "<span style='color:red'>你死了!</span>", 10000)
            setTimeout(()=> alert("结局-1 [不要乱开门!]"), 11000 )
        }
        else if (set == "释放A气体") {
            abc = "end-2"; // 更新 abc 的值
            ot.textContent = "已释放A气体"
            setTimeout(() => keto.innerHTML = "你听到了后面传来一声'滴'，你转头看去。", 800);
            setTimeout(() => keto.innerHTML += "发现后面的通风口里有红色气体在房间了蔓延，很快你失去了意识", 2800);
            setTimeout(()=> keto.innerHTML += "<span style='color:red'>你死了!</span>", 4500)
            setTimeout(()=> alert("结局-2 [嗯?这气体怎么还是草莓味的?!]"), 6000 )
        }
        else if (set == "释放B气体"){
            abc = "3"; // 更新 abc 的值
            ot.textContent = "请敬请期待后续版本更新!"
            keto.innerHTML = "请敬请期待后续版本更新!"
        }
        else {
            ot.textContent = "命令错误!"
            
        }

    }
});

