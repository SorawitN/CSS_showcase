 let acc = document.getElementsByClassName("js-accodian-box")
            
let acc_btn = document.getElementById("js-acc_btn")
let acc_body = document.getElementById("js-acc_body")
let acc_btn_press = false
            
acc_btn.onclick = () => {
    if(!acc_btn_press){
        acc_body.style.height = `128px`
        acc_btn.innerHTML = `<path d="M2 8L7.5 3L13 8" stroke="white" stroke-width="3"/>`
        acc_btn_press = true
    }else{
        acc_body.style.height = `0px`
        acc_btn.innerHTML = `<path d="M13 2L7.5 7L2 2" stroke="white" stroke-width="3"/>`
        acc_btn_press = false
        }
    }