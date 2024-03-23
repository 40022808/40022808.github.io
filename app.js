//定义变量
const keto = document.getElementById("keto");
const halom = document.getElementById("halom");
const negy = document.getElementById("negy");
const button = document.getElementById("button");
const ot = document.getElementById("ot");
const bgm = document.getElementById("bgm");
const 按钮1 = document.getElementById("按钮1");
const 打字 = document.getElementById("打字");
const 开门 = document.getElementById("开门");
const 机枪 = document.getElementById("机枪");
const end = document.getElementById("end");
const 气体 = document.getElementById("气体");
const 错误 = document.getElementById("错误");

alert("目前版本:0.01.27");
// 将 abc 声明为全局变量
var abc = "0";
var nev = "";

const 开始按钮 = document.getElementById("开始按钮");

开始按钮.addEventListener("click",()=> {
    const hiddenContent = document.querySelector('.隐藏');
    hiddenContent.style.display = 'block';
    const hiddenbutton = document.querySelector(".开始按钮")
    hiddenbutton.style.display = "none";
})





//背景音乐设置
let bgmStarted = false;
const startPlayBGM = () => {
  if (bgmStarted) return;
  bgmStarted = true;
  bgm.play();
  bgm.volume = 0.05 ;
  document.body.removeEventListener('click', startPlayBGM);
  window.removeEventListener('keydown', startPlayBGM);
};
document.body.addEventListener('click', startPlayBGM);
window.addEventListener('keydown', startPlayBGM);




let text1 = "你从一个昏暗的房间中醒来，你发现这是一个由某种金属构成的小房间，你的后面有一个小型通风口，前面有一道铁门上了锁，旁边的墙壁上镶嵌着显示器。突然显示器亮了起来。(右边或者下边是显示器)"

// 逐字显示文本
function showText(index) {
    打字.play();
    打字.volume = 0.6 ;
    if (index < text1.length) {
        keto.innerHTML += text1[index];

        setTimeout(() => {
            showText(index + 1);
        }, 100); // 设置延迟时间（毫秒）
    }
    else {
        打字.pause()
        abc = "1";
    }
}

// 开始逐字显示

setTimeout(()=> {showText(0)},3000)










button.addEventListener("click", () => {
    按钮1.play();
    按钮1.volume = 0.5 ;
    if (abc === "1") {
        nev = negy.value;
        negy.value = "";
        abc = "2"; // 更新 abc 的值
        halom.textContent = "在输入区输入操作就可以执行了";
        ot.innerHTML  = "你好" + nev + "!<br>你可以进行以下操作:";
        setTimeout(() => {ot.innerHTML += "<br>》解除铁门的电子锁<br>"}, 1000);
        setTimeout(() => {ot.innerHTML += "》释放A气体<br>"}, 2000);
        setTimeout(() => ot.innerHTML += "》释放B气体<br>", 3000);
        setTimeout(() => ot.innerHTML += "（在输入区输入操作就可以执行了）", 3500);
        
    } 
    else if (abc === "2") {
        let set = negy.value;
        negy.value = "";
        if (set == "解除铁门的电子锁"){
            abc = "end-1"; // 更新 abc 的值
            ot.textContent = "已解开门锁"
            开门.play();
            setTimeout(() => keto.innerHTML = "你成功了", 800);
            setTimeout(()=> keto.innerHTML += "，不过当你把门打开的时候，你看到了一群机器人。", 1500);
            setTimeout(()=> keto.innerHTML += "它们胸前的扫描光束照到你了，紧接着它们开始朝着你开枪。", 3500);
            setTimeout(()=> {机枪.play()}, 3500);
            setTimeout(()=> {机枪.volume = 0.3 }, 3500);
            setTimeout(()=> {机枪.volume = 0.1}, 5000);
            setTimeout(()=> keto.innerHTML += "随着几声枪响，你感觉到疼痛而且意识也开始模糊了起来。", 5500);
            setTimeout(()=> {机枪.pause()}, 6500);
            setTimeout(()=> keto.innerHTML += "<span style='color:red'>你死了!</span>", 9000)
            setTimeout(()=> {bgm.pause()}, 9000);
            setTimeout(()=> alert("结局-1 [不要乱开门!]"), 11000 )
            setTimeout(()=> end.play() , 11000 )
            setTimeout(()=> end.volume = 0.8 , 11000 )
        }
        else if (set == "释放A气体") {
            abc = "end-2"; // 更新 abc 的值
            ot.textContent = "已释放A气体"
            气体.play()
            setTimeout(() => keto.innerHTML = "你听到了后面传来一声'滴'，你转头看去。", 800);
            setTimeout(() => keto.innerHTML += "发现后面的通风口里有红色气体在房间了蔓延，很快你失去了意识", 2800);
            setTimeout(() => 气体.pause() , 6500);
            setTimeout(()=> keto.innerHTML += "<span style='color:red'>你死了!</span>", 6500)
            setTimeout(()=> {bgm.pause()}, 6500);
            setTimeout(()=> alert("结局-2 [嗯?这气体怎么还是草莓味的?!]"), 8000 )
            setTimeout(()=> end.play() , 8000 )
            setTimeout(()=> end.volume = 0.8 , 8000 )
        }
        else if (set == "释放B气体"){
            abc = "3"; // 更新 abc 的值
            ot.textContent = "已释放B气体"
            气体.play()
            keto.textContent = "";
            let text2 = "你听到了后面传来一声'滴'，你转头看去。发现后面的通风口里有蓝色气体在房间了蔓延，很快就充满了整个房间。不过你发现自己好像没发生什么变化，不过这个味道确实不好闻。你把注意力转回到了显示器上。"
            setTimeout(() => 气体.pause() , 5000);
            function showText2(index) {
                打字.play();
                打字.volume = 0.6 ;
                if (index < text2.length) {
                    keto.innerHTML += text2[index];
            
                    setTimeout(() => {
                        showText2(index + 1);
                    }, 100); // 设置延迟时间（毫秒）
                }
                else {
                    打字.pause()
                    setTimeout(()=>{ot.innerHTML  = "你好" + nev + "!<br>你可以进行以下操作:"},1000);
                    setTimeout(() => {ot.innerHTML += "<br>》解除铁门的电子锁<br>"}, 2000);
                    setTimeout(() => {ot.innerHTML += "》释放A气体<br>"}, 3000);
                    setTimeout(() => ot.innerHTML += "》释放B气体<br>", 4000);
                    
                }
            }
            showText2(0);
        }
        else {
            ot.textContent = "命令错误!"
            setTimeout(()=>{ot.innerHTML  = "你好" + nev + "!<br>你可以进行以下操作:"},1500);
            setTimeout(() => {ot.innerHTML += "<br>》解除铁门的电子锁<br>"}, 2500);
            setTimeout(() => {ot.innerHTML += "》释放A气体<br>"}, 3500);
            setTimeout(() => ot.innerHTML += "》释放B气体<br>", 4500);
            
            
        }

    }
    else if (abc == "3"){
        let set = negy.value;
        negy.value = "";
        if (set == "释放A气体") {
            abc = "end-2"; // 更新 abc 的值
            ot.textContent = "已释放A气体"
            气体.play()
            setTimeout(() => keto.innerHTML = "你听到了后面传来一声'滴'，你转头看去。", 800);
            setTimeout(() => keto.innerHTML += "发现后面的通风口里有红色气体在房间了蔓延，很快你失去了意识", 2800);
            setTimeout(() => 气体.pause() , 6500);
            setTimeout(()=> keto.innerHTML += "<span style='color:red'>你死了!</span>", 6500)
            setTimeout(()=> {bgm.pause()}, 6500);
            setTimeout(()=> alert("结局-2 [嗯?这气体怎么还是草莓味的?!]"), 8000 )
            setTimeout(()=> end.play() , 8000 )
            setTimeout(()=> end.volume = 0.8 , 8000 )
        }

        else if (set == "释放B气体") {
            错误.play()
            错误.volume = 0.1
            ot.innerHTML = "B气体释放失败，<br>失败原因:B气体已消耗殆尽"
            function 选择1(){
                setTimeout(()=>{ot.innerHTML  = "你好" + nev + "!<br>你可以进行以下操作:"},1500);
                setTimeout(() => {ot.innerHTML += "<br>》解除铁门的电子锁<br>"}, 2500);
                setTimeout(() => {ot.innerHTML += "》释放A气体<br>"}, 3500);
                setTimeout(() => ot.innerHTML += "》释放B气体<br>", 4500);
            }
            setTimeout(() => {选择1()}, 9000 )
            
        }
        else if (set =="解除铁门的电子锁" ) {
            abc = "4"; // 更新 abc 的值
            ot.textContent = "已解开门锁"
            开门.play();
            keto.textContent = "";
            let text = "你成功了,不过当你把门打开的时候，你看到了一群机器人。它们胸前的扫描光束照到你了，不过它们无视了你，并且你发现你身体表面上有一层B气体。应该是这个让机器人识别不了你，看着机器人身上的机枪你感觉到了庆幸。趁着气体还有用你准备离开这。"
            function showText3(index) {
                打字.play();
                打字.volume = 0.6 ;
                if (index < text.length) {
                    keto.innerHTML += text[index];
            
                    setTimeout(() => {
                        showText3(index + 1);
                    }, 100); // 设置延迟时间（毫秒）
                }
                else {
                    打字.pause()
                    keto.innerHTML += "<br><br>";
                    showText4(0);
                }
            }
            showText3(0);
            let text2 = "你从房间里走了出来，避开了机器人们来到了走廊。这个走廊没有一扇窗户，却充满了一道道紧闭的门。最后来到了一扇特别的门前。推开门你看到了...(to be continued!!!)";
            function showText4(index) {
                打字.play();
                打字.volume = 0.6 ;
                if (index < text2.length) {
                    keto.innerHTML += text2[index];
            
                    setTimeout(() => {
                        showText4(index + 1);
                    }, 100); // 设置延迟时间（毫秒）
                }
                else {
                    打字.pause()
                    bgm.pause()
                    end.play()
                    end.volume = 0.8       
                }
            }
            
        }
        else {
            ot.textContent = "命令错误!"
            选择1()
        }
    }

});

