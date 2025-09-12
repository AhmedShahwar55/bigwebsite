let menu = document.querySelector(".menu")
let sidebar = document.querySelector(".sidebar")
let sidebaricon = document.querySelector(".sidebaricon")
let leftbar = document.querySelector(".leftbar")
let wrapper = document.querySelector(".wrapper")
let loadingful = document.querySelector(".loadingful")
let sidebarheading = document.querySelectorAll(".sidebarheading h2")
let leftbarh1 = document.querySelector(".leftbar h1")
let mainpage = document.querySelector(".mainpage")
function openmenu(){
    menu.addEventListener("click",function(){
    gsap.to(".sidebar",{
        right:0,
        opacity:1,
        duration:1,
        delay:0.3,
        // ease:"bounce.out"
    })
    gsap.to(".leftbar",{
        left:0,
        opacity:1,  
        duration:1,
        delay:0.3,
        // ease:"bounce.out"
    })
})
}
function closebutton(){
    sidebaricon.addEventListener("click",function(){
    gsap.to(".sidebar",{
        right:"-50%",
        opacity:0.5,
        duration:0.6,
        delay:0.3,

    })
     gsap.to(".leftbar",{
        left:"-50%",
        opacity:0.5,
        duration:0.6,
        delay:0.3,
    })
})

}
function loader(){
    gsap.to(".loadingful",{
    left:"0%",
    // duration:10,
    // delay:1
})
}
function wrapperwrap(){
    gsap.to(".wrapper1",{
    left:"-100%",
    // duration:2,
    // delay:11,
})
gsap.to(".wrapper2",{
    right:"-100%",
    // duration:2,
    // delay:11,
})
}
// function bughattipage(){
    
// gsap.to(".mainpage",{
//     scrollTrigger:{
//         trigger:".mainpage",
//         scroller:"body",
//         scrub:2,
//         pin:true,
//         end:"top -100%"
//     }
// })
// gsap.to(".page1",{
//     top:"100%",
//     duration:1,
//     delay:1,
// })
// }
openmenu();
closebutton();
loader();
wrapperwrap();
// bughattipage();

// sidebarheading.forEach(h2 => {
//     h2.addEventListener("mouseenter",function(){

//     })
//     h2.addEventListener("mouseleave",function(){
//     })
// });
