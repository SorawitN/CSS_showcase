let card_list = document.getElementsByClassName("card")

let button_left = document.getElementById("js-button1")
let button_right = document.getElementById("js-button2")

let debug = document.getElementById("debug")

let card_position = [];


function even(num) {
    if(num%2===0){
return true
    }
    return false
}



debug.onclick = () => {
    console.log(card_position)
}

button_right.onclick = () => {
    for(let i=0; i<card_list.length; i++){
        card_position[i] = card_position[i] + 315;
    }
    for(let i=0; i<card_list.length; i++){
        card_list[i].style.left = `calc(50% - 132px + ${card_position[i]}px)`
    }
}

button_left.onclick = () => {
    for(let i=0; i<card_list.length; i++){
        card_position[i] = card_position[i] - 315;
    }
    for(let i=0; i<card_list.length; i++){
        card_list[i].style.left = `calc(50% - 132px + ${card_position[i]}px)`
    }
}


function check() {
    for(let i=0; i<card_list.length; i++){
    console.log(card_list[i].style.left);
    }
}






function main(){
    /* Check Card number that have odd or even */
    let counter = 1

    if(card_list.length == 1){
        console.log("later")
    }else if(even(card_list.length)){
        let midRight = card_list.length/2
        let midLeft = midRight - 1
        card_position.push(315)
        card_position.push(0)

        card_list[midLeft].style.left = `calc(50% + 25px - 315px)`
        card_list[midRight].style.left = `calc(50% + 25px + 0px)`


        // left side position assign
        counter = 2
        for(let i=0; i<midLeft; i++){
            card_position.unshift(315*(counter))
            counter++;
        }

        // Right side position assign
        counter = 1;
        for(let i=midRight + 1; i<card_list.length; i++){
            card_position.push(315*(counter))
            counter++;
        }

        console.log(card_position)

        for(let i=0; i<midLeft; i++){
            card_list[i].style.left = `calc(50% + 25px - ${card_position[i]}px)`
            //console.log(card_list[i].style.left)
        }

        for(let i=midRight + 1; i<card_list.length; i++){
            card_list[i].style.left = `calc(50% + 25px + ${card_position[i]}px)`
            //console.log(card_list[i].style.left)
        }

        
        console.log(card_list[0].style.left)
        console.log(card_list[1].style.left)
        console.log(card_list[2].style.left)
        console.log(card_list[3].style.left)

        
        console.log(card_position)

        




        

    }else{
        let mid = parseInt(card_list.length/2)
        card_position.push(0)
        
        for(let i=0; i<mid; i++){
            card_position.unshift(-315*(counter))
            counter++;
        }

        counter = 1;
        for(let i=mid+1; i<card_list.length; i++){
            card_position.push(315*(counter))
            counter++;
        }

        for(let i=0; i<card_list.length; i++){
            card_list[i].style.left = `calc(50% - 132px + ${card_position[i]}px)`
        }
    }

}

main()
