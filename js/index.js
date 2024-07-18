// 监听scroll事件
// 监听scroll事件
const item = document.querySelector('#borderlast')
console.log(item);

window.addEventListener('scroll', checkScrollEnd
);

function checkScrollEnd() {
    if (window.scrollY >= document.body.scrollHeight - window.innerHeight) {
        // 在这里触发你的动画
        item.style.animation = "showText 1s linear forwards"
        console.log(item);
        console.log(1);
        window.removeEventListener('scroll', checkScrollEnd);
    }
}
