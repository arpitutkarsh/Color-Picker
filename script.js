//first we need to select the elements like buttons and then body
const buttons = document.querySelectorAll('.button') //first we selected the button tag
//console.log(buttons)
const body = document.querySelector('body') //then we selected the body tag
//events
buttons.forEach(function(button){
    console.log(button);
    //we are adding the event listener to the button
    button.addEventListener("mouseover", function(e){ //instead of mouseover we can use click, mouseout, mouseover, mouseenter, mouseleave, keydown, keyup, keypress, etc
        console.log(e)
        console.log(e.target)
        if(e.target.id === "gold"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "button"){
            body.style.backgroundColor = "white"
            body.style.color = "black"
            body.style.fontFamily = "Calibri"
        }
        else if(e.target.id === "blue"){
            body.style.backgroundColor = "blue"
            body.style.color = "white"
            
        }
        else{
            body.style.backgroundColor = "pink"
            body.style.color = "black"
        }
    });
})