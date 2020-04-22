//https://stackoverflow.com/questions/40602300/highlighting-line-of-text-in-div-while-scrolling
//Source for "Highlighter"

var highlight = document.querySelector("#highlight");

window.addEventListener('scroll', function(e){
	var y = window.scrollY;
	var offset = y % 30;
	highlight.style.marginTop =  - y % 30 + "px";
});

//https://www.youtube.com/watch?v=DP9-CVgkgDA&t=208s

function colourChange(){
    let color = document.getElementById("inputColour").value;
    //document.body.style.backgroundColor = color;
    document.getElementById("highlight").style.backgroundColor = color;
    console.log("Change colour");
};

