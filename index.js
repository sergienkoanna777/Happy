let text="Every day I get happier...";
let i=0;
let speed=100;

function type(){
    if(i<text.length){
        document.querySelector(".happy").textContent +=text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();