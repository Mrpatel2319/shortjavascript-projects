
function setTime(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    document.querySelector('#hour').innerHTML = hour;
    document.querySelector('#minute').innerHTML = min;
    document.querySelector('#second').innerHTML = sec;
    setTimeout(setTime, 1000);
}
setTime();