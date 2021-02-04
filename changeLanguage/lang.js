
var copy= {
    text1: {
        id: "text1",
        cat:"català",
        cast:"castellà",
        eng:"english",
    },
    text2: {
        id: "text2",
        cat:"català2",
        cast:"castellà2",
        eng:"english2",
    }
}


function lang(buttonValue){
    for(const id in copy){
        if(Object.hasOwnProperty.call(copy, id)){ //per comprovar si existeix
            document.querySelector(`#${id}`).innerHTML = copy[id][buttonValue];  //copy.id.buttonvalue
        }
    }
}

document.querySelectorAll(".lang").forEach((button) => {
    button.addEventListener("click", () =>{
        llenguatge(button.value);
    })
});




// lang("cat"); ///inicialitza amb cat com a defecte
