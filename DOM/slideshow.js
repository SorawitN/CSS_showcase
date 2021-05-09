let cardHTMLCollection = document.getElementsByClassName("card")

let button_left = document.getElementById("js-button1")
let button_right = document.getElementById("js-button2")

let debug = document.getElementById("debug")

let card_position = [];

let midPointer = 0


function even(num) {
    if(num%2===0){
    return true
    }
    return false
}



debug.onclick = () => {
    console.log(card_position)
}

function update() {
    if(even(cardHTMLCollection.length)){
        for(let i=0; i<cardHTMLCollection.length; i++){
            cardHTMLCollection[i].style.left = `calc(50% + 25px + ${card_position[i]}px)`
        }
    }else{
        for(let i=0; i<cardHTMLCollection.length; i++){
            cardHTMLCollection[i].style.left = `calc(50% - 132px + ${card_position[i]}px)`
        }
    }
}

button_right.onclick = () => {
    if(midPointer>0){
        for(let i=0; i<cardHTMLCollection.length; i++){
            card_position[i] = card_position[i] + 315;
        }
        cardHTMLCollection[midPointer].style.filter = `blur(2px)`
        cardHTMLCollection[midPointer].style.transform = 'scale(0.8)'
        midPointer--
        cardHTMLCollection[midPointer].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`
        cardHTMLCollection[midPointer].style.transform = 'scale(1)'
        update()
    }
}

button_left.onclick = () => {
    if(midPointer<cardHTMLCollection.length-1){
        for(let i=0; i<cardHTMLCollection.length; i++){
            card_position[i] = card_position[i] - 315;
        }
        cardHTMLCollection[midPointer].style.filter = `blur(2px)`
        cardHTMLCollection[midPointer].style.transform = 'scale(0.8)'
        midPointer++
        cardHTMLCollection[midPointer].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`
        cardHTMLCollection[midPointer].style.transform = 'scale(1)'
        update()
    }
}


function check() {
    for(let i=0; i<cardHTMLCollection.length; i++){
    console.log(cardHTMLCollection[i].style.left);
    }
}






function main(){
    /* Check Card number that have odd or even */
    let counter = 1

    if(cardHTMLCollection.length == 1){
        console.log("later")
    }else if(even(cardHTMLCollection.length)){
        let midRight = cardHTMLCollection.length/2
        midPointer = midRight
        let midLeft = midRight - 1
        card_position.push(-315)
        card_position.push(0)

        // left side position assign
        counter = 2
        for(let i=0; i<midLeft; i++){
            card_position.unshift(-315*(counter))
            counter++;
        }

        // Right side position assign
        counter = 1;
        for(let i=midRight + 1; i<cardHTMLCollection.length; i++){
            card_position.push(315*(counter))
            counter++;
        }

        console.log(card_position)

        for(let i=0; i<=midLeft; i++){
            cardHTMLCollection[i].style.left = `calc(50% + 25px - ${(card_position[i]*-1)}px)`
            //console.log(cardHTMLCollection[i].style.left)
        }

        for(let i=midRight ; i<cardHTMLCollection.length; i++){
            if(i==midPointer){
                cardHTMLCollection[i].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`
                cardHTMLCollection[i].style.transform = 'scale(1)'
            }
            cardHTMLCollection[i].style.left = `calc(50% + 25px + ${card_position[i]}px)`
            //console.log(cardHTMLCollection[i].style.left)
        }

        
        console.log(cardHTMLCollection[0].style.left)
        console.log(cardHTMLCollection[1].style.left)
        console.log(cardHTMLCollection[2].style.left)
        console.log(cardHTMLCollection[3].style.left)

        
        console.log(card_position)

        




        

    }else{
        let mid = parseInt(cardHTMLCollection.length/2)
        midPointer = mid
        card_position.push(0)
        
        for(let i=0; i<mid; i++){
            card_position.unshift(-315*(counter))
            counter++;
        }

        counter = 1;
        for(let i=mid+1; i<cardHTMLCollection.length; i++){
            card_position.push(315*(counter))
            counter++;
        }

        for(let i=0; i<cardHTMLCollection.length; i++){
            if(i==midPointer){
                cardHTMLCollection[i].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`
                cardHTMLCollection[i].style.transform = 'scale(1)'
            }
            cardHTMLCollection[i].style.left = `calc(50% - 132px + ${card_position[i]}px)`
        }
    }

}

main()
