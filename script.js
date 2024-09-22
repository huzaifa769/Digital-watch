function showTime() {
    var clock = document.getElementById('clock')
    var day = document.getElementById('day')
    var array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var time = 'AM'
    var date = new Date();
    var seconds = 0
    day.innerHTML = array[date.getDay()] + " , " + date.getDate() + " " + month[date.getMonth()] + " , " + date.getFullYear()
    if (date.getHours() <= 12) {
        time = 'AM'
    } else if (date.getHours() > 12) {
        time = 'PM'
    }
    if (date.getSeconds() <= 9) {
        seconds = 0 + "" + date.getSeconds()
    }else seconds = date.getSeconds()
    clock.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + seconds+ ":" + time
}

setInterval(function () {
    showTime();
}, 1000);
showTime();
