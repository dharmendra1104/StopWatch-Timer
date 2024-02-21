let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')

let milisecond = 0;
let second = 0;
let minute = 0;

let timerid;
start.addEventListener('click', () => {
    timerid = setInterval(() => {
        milisecond++
        // console.log(second)

        if (milisecond >= 100) {
            second++
            milisecond = 0
        }
        if (second >= 60) {
            minute++
            second = 0
        }
        // if (hour >= 24) {
        //     day++
        //     hour = 0
        // }
        if (milisecond > 100) {
            seconds.innerText = `0${milisecond}` 
        }
        else {
            seconds.innerText = milisecond
        }
        if (second < 10) {
            minutes.innerText = `0${second}`
        } else {
            minutes.innerText = second
        }
        if (minute < 10) {
            hours.innerText = `0${minute}`
        } else {
            hours.innerText = minute
        }

    }, 10)

})

stop.addEventListener('click', () => {
    clearInterval(timerid)
})


reset.addEventListener('click',()=>{
    clearInterval(timerid)
    seconds.innerText = "00"
    minutes.innerText = "00"
    hours.innerText = "00"

})


