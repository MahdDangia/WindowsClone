let taskBar = document.getElementsByClassName('taskBar')[0]
let startMenu = document.getElementsByClassName('startMenu')[0]

taskBar.addEventListener('click', ()=>{
    if(startMenu.style.bottom == '35px') {
        startMenu.style.bottom = '-520px'
    } else {
        startMenu.style.bottom = '35px'
    }
})

let taskBarRightOpened = document.getElementsByClassName('.taskbaropened')

taskBarRightOpened.addEventListener('click', ()=>{
    if(taskbaropened.style.bottom == '40px') {
        taskbaropened.style.bottom = '-520px'
    } else {
        taskbaropened.style.bottom = '35px'
    }
})

