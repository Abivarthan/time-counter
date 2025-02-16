const Start=document.getElementById("Start")
const Stop=document.getElementById("Stop")
const Reset=document.getElementById("Reset")
let Counttime=document.getElementById("count-time")
let hours=0,mins=0,sec=0,mills=0,timer=null
function updateDisplay(){
    Counttime.innerHTML = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (sec < 10 ? "0" + sec : sec) + ":" +
    (mills < 10 ? "0" + mills : mills)
}
Start.addEventListener("click",()=>{
    if(!timer){
        timer=setInterval(()=>{
            mills++
            if(mills>99){
                sec++
                mills=0
            }
            else if(sec>59){
                mins++
                sec=0
            }
            else if(mins>59){
                hours++
                mins=0
            }
            updateDisplay()
        },10)
    }
})
Stop.addEventListener("click",()=>{
    clearInterval(timer)
    timer = null
})
Reset.addEventListener("click",()=>{
    clearInterval(timer)
    timer = null
    hours=0
    mins=0
    sec=0
    mills=0
    updateDisplay()
})
updateDisplay()
