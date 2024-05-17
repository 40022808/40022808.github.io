function updateElementContent() {
    let element = document.getElementById('内容_1_h2');
    if (window.innerWidth <= 900) {
      element.innerHTML = '学校作业做的伪小游戏网站<br>(没有做手机适配,建议用电脑)';
    } else {
      element.innerHTML = '学校作业做的伪小游戏网站(没有做手机适配,建议用电脑)';
    }
}
  
// 在窗口大小调整时更新元素内容
window.addEventListener('resize', updateElementContent);
  
// 在页面加载时立即更新元素内容
updateElementContent();



