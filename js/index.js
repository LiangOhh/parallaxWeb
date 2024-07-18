// 监听scroll事件
// 监听scroll事件
/* const item = document.querySelector('#borderlast')
// console.log(item);

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
} */

// 时钟函数
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

// 首张背景图片加载动画
document.addEventListener('DOMContentLoaded', () => {
    // 定义Intersection Observer的回调函数
    function handleIntersection(entries, observer) {
        // console.log('观测到');
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 添加动画类
                // const animationId = entry.target.dataset.animationId;
                // document.getElementById(animationId).classList.add('animate__fadeInBottomLeft', 'animate__slower');
                // console.log(entry.target);
                entry.target.style.animation = 'fadeIn 2s ease-in-out forwards'
                // 停止观察当前元素，避免重复触发
                observer.unobserve(entry.target);
            }
        });
    }
    // 创建Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // 元素进入视窗10%时触发
    });
    // 观察所有背景图片
    const bgElements = document.querySelectorAll('.bg');
    bgElements.forEach((bg, index) => {
        // bg.dataset.animationId = `animation${index + 1}`;
        observer.observe(bg);
    });
});

// 给最后一个增加谢谢观看
document.addEventListener('DOMContentLoaded', () => {
    // 定义Intersection Observer的回调函数
    function handleIntersection(entries, observer) {
        let entry = entries[0]
        if (entry.isIntersecting) {
            // console.log(entry.target);
            entry.target.style.animation = 'showLastText 4s linear forwards '
            observer.unobserve(entry.target);
        }
    }
    const observer_last = new IntersectionObserver(handleIntersection, {
        threshold: 0.9
    });
    const lastBg = document.querySelector('#borderlast');
    observer_last.observe(lastBg)
});