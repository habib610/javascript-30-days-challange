const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

const setDate = () => {
   const now = new Date();
   const seconds = now.getSeconds()

   const secondDegrees = ((seconds / 60) * 360) + 90;
   second.style.transform = `rotate(${secondDegrees}deg)`;

   const mins = now.getMinutes();
   const mins = now.getHours();


}
setInterval(setDate, 1000)