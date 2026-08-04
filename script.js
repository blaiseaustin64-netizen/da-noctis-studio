// Typing effect for hero subtitle

const words = [

"Freelance Writer",

"SEO Content Specialist",

"Storyteller",

"Creator of Shadowbound"

];

const target =
document.querySelector(".hero p");

let word = 0;
let letter = 0;
let deleting = false;

function type(){

let current = words[word];

if(!deleting){

target.textContent =
current.substring(0,letter++);

if(letter > current.length){

deleting = true;

setTimeout(type,1500);

return;

}

}else{

target.textContent =
current.substring(0,letter--);

if(letter < 0){

deleting = false;

word = (word+1)%words.length;

}

}

setTimeout(type,deleting?40:80);

}

type();




// Button interaction

const button = document.querySelector("button");


button.addEventListener("click", function(){

    document.querySelector("#portfolio")
    .scrollIntoView({
        behavior:"smooth"
    });

});




// Scroll reveal effect

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(
this.clientWidth,
this.clientHeight
);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=
e.offsetX-size/2+"px";

ripple.style.top=
e.offsetY-size/2+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


const modal =
document.getElementById("sampleModal");

const readBtn =
document.querySelector(".read-btn");

const closeModal =
document.querySelector(".close-modal");

readBtn.onclick=()=>{

modal.style.display="flex";

};

closeModal.onclick=()=>{

modal.style.display="none";

};

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

};
