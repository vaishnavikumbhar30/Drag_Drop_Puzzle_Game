onload = function () {
    let parent = document.getElementById("drag");
    let frag = document.createDocumentFragment();
    while(parent.children.length)
    {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);   
    }
    parent.appendChild(frag)
    
}


// craete a function and pass event as parameter .....
// we want to transfer data in event 
// when we call (drag)function where data transfer  
function drag (event) {
    // console.log(event);

    event.dataTransfer.setData("text", event.target.id)
}

function dropOver(event){
    event.preventDefault()
}
function drop(event){
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}



