function init(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
      // follwoing line is not required to work pinning on touch screen
    
      /* pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed"*/
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
}


init()
var cursor = document.querySelector("#cursor")
var overlay = document.querySelector("#overlay")
var p3img = document.querySelector("#p3img")
var overlayp3 = document.querySelector("#overlayp3")


overlay.addEventListener("mouseenter",function(){
    cursor.style.scale = "1"
})
overlay.addEventListener("mouseleave",function(){
    cursor.style.scale = "0"
})
overlay.addEventListener("mousemove",function(dets){ 
    cursor.style.left = dets.x - 50+ "px" 
    cursor.style.top = dets.y - 40+ "px" 
})
gsap.to("#image1",{
    rotate:"4deg",
    scrollTrigger:{
        trigger:"#image1",
        scroller:"#main",
        scrub:3,
        // markers:true,
        start:"top 70%",
        end:"top -30%",
        // pin:true
    }
})

gsap.to("svg",{
  top:"5%",
  scale:.8,
  fill: "#111",
  scrollTrigger:{
    trigger:"svg",
    scroller:"#main",
    scrub:true,
    // markers:true,
    start:"top 45%",
    end:"top -50%"
  }
})
gsap.to("svg",{
  fill: "#fff",
  scrollTrigger:{
    trigger:"svg",
    scroller:"#main",
    scrub:true,
    // markers:true,
    start:"top -223%",
    // end:"top -210%"
  }
})
gsap.to("#nav",{
  background:" linear-gradient(#00000052,#0000000b,#00000000)",
  scrollTrigger:{
    trigger:"#nav",
    scroller:"#main",
    scrub:true,
    // markers:true,
    start:"top -223%",
    // end:"top -210%"
  }
})
gsap.to("#nav h1",{
  color: "#fff",
  scrollTrigger:{
    trigger:"#nav h1",
    scroller:"#main",
    scrub:true,
    // markers:true,
    start:"top -267%",
    // end:"top -210%"
  }
})

gsap.to("#nav h1",{
  color:"#111",
  scrollTrigger:{
    trigger:"svg",
    scroller:"#main",
    scrub:true,
    // markers:true,
    start:"top -20%",
    end:"top -50%"
  }
})
gsap.to("#nav",{
  background:" linear-gradient(#ffffff52,#ffffff0b,#ffffff00)",
  scrollTrigger:{
    trigger:"svg",
    scroller:"#main",
    scrub:true,
    // markers:true,
    start:"top -20%",
    end:"top -50%"
  }
})

overlayp3.addEventListener("mousemove",(dets)=>{
  p3img.style.opacity = 1
  p3img.style.left = dets.x + "px"
  p3img.style.top = dets.y + "px"

})
overlayp3.addEventListener("mouseleave",()=>{
  p3img.style.opacity = 0
})