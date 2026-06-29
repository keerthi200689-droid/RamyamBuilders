// ===============================
// RAMYAM BUILDERS
// Premium Website JavaScript
// ===============================

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});


// Sticky Navbar Background

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="#111";
header.style.transition=".4s";

}
else{

header.style.background="rgba(0,0,0,.45)";

}

});


// Counter Animation

const counters=document.querySelectorAll(".counter h2");

const speed=200;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.innerText.replace("+","");

const count=+counter.getAttribute("data-count") || 0;

const increment=target/speed;

if(count<target){

const value=Math.ceil(count+increment);

counter.setAttribute("data-count",value);

counter.innerText=value+"+";

setTimeout(update,15);

}
else{

counter.innerText=target+"+";

}

}

update();

});


// Reveal Animation

const reveals=document.querySelectorAll(

".service-card,.project-card,.why-card,.testimonial-box,.about-grid,.contact-grid"

);

window.addEventListener("scroll",reveal);

function reveal(){

reveals.forEach(item=>{

const windowHeight=window.innerHeight;

const revealTop=item.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

item.classList.add("active");

}

});

}


// Hover Animation for Service Cards

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// Hover Animation for Project Cards

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 20px 45px rgba(0,0,0,.2)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

});

});


// Contact Form

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(

"Thank you for contacting Ramyam Builders!\n\nOur team will contact you shortly."

);

form.reset();

});

}


// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="100px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#ff9800";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="20px";
topBtn.style.boxShadow="0 8px 20px rgba(0,0,0,.25)";
topBtn.style.zIndex="999";


window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

});


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// Loading Animation

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},200);

});


// Console Welcome

console.log("%cWelcome to Ramyam Builders","color:orange;font-size:20px;font-weight:bold;");
console.log("Website Designed for Ramyam Builders");