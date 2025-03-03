document.addEventListener('DOMContentLoaded', () => {
    // 倒计时功能
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 23); // 23天后

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        if (diff > 0) {
            requestAnimationFrame(updateCountdown);
        }
    }

    updateCountdown();

    // 维修机器人随机移动
    const drone = document.querySelector('.maintenance-drone');
    let droneX = Math.random() * (window.innerWidth - 60);
    let droneY = Math.random() * (window.innerHeight - 60);

    function moveDrone() {
        const targetX = Math.random() * (window.innerWidth - 60);
        const targetY = Math.random() * (window.innerHeight - 60);
        
        drone.style.left = `${targetX}px`;
        drone.style.top = `${targetY}px`;
        
        setTimeout(moveDrone, Math.random() * 3000 + 2000);
    }

    drone.style.left = `${droneX}px`;
    drone.style.top = `${droneY}px`;
    setTimeout(moveDrone, 2000);

    // 邮箱图标点击事件
    const emailIcon = document.querySelector('.email-icon');
    emailIcon.addEventListener('click', () => {
        alert('请联系我们：zzuli-esports@example.com');
    });

    // QR码点击事件
    const qrCode = document.querySelector('.qr-code');
    qrCode.addEventListener('click', () => {
        alert('扫描二维码加入QQ群：123456789');
    });

    // 校徽点击彩蛋
    const logo = document.querySelector('.logo-outer');
    let clickCount = 0;
    const easterEgg = document.getElementById('easterEgg');

    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            easterEgg.play();
            clickCount = 0;
        }
    });

    // 霓虹闪烁效果
    function createNeonPulse() {
        const pulse = document.createElement('div');
        pulse.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background: var(--accent-purple);
            border-radius: 50%;
            pointer-events: none;
            z-index: 99;
        `;
        document.body.appendChild(pulse);

        pulse.animate([
            { opacity: 0.8, transform: 'translate(-50%, -50%) scale(1)', boxShadow: '0 0 20px var(--accent-purple)' },
            { opacity: 0, transform: 'translate(-50%, -50%) scale(100)', boxShadow: '0 0 0 var(--accent-purple)' }
        ], {
            duration: 2000,
            easing: 'ease-out'
        }).onfinish = () => pulse.remove();
    }

    setInterval(createNeonPulse, 10000);
});