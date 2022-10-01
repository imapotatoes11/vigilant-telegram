
/*
var i=0;
var txt="Vel commodi perspiciatis hic voluptatem ducimus sit magnam illum non blanditiis temporibus est ratione voluptas 33 doloribus nulla!"
var speed=10;//in milliseconds

function typeWriter() {
    if (i<txt.length){
        document.getElementById("typeout").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}
typeWriter()*/


function typeWrite(id, message, speed) {
    console.log("fsdfa")
    var i = 0;
    var txt=message
    var speed=speed;
    var elem = document.getElementById(id);
    function typeWriter() {
        if (i<txt.length){
            elem.innerHTML+=txt.charAt(i);
            i++;
            setTimeout(typeWriter,speed);
        }
    }
}



//Scroll to top
function scrollTop(){
    window.scrollTo(0,0)
}