window.addEventListener('resize', function() {
    let element = document.getElementById('内容_1_h2'); // 用你的元素ID替换'myElement'
    if (window.innerWidth <= 900) {
      element.innerHTML = '学校作业做的伪小游戏网站<br>(没有做手机适配,建议用电脑)'; // 用你想要的内容替换'新的内容<br>新的一行'
    } else {
      element.innerHTML = '学校作业做的伪小游戏网站(没有做手机适配,建议用电脑)'; // 用元素原来的内容替换'原来的内容'
    }
  });