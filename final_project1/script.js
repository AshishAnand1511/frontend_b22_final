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
    rotate:"7deg",
    scrollTrigger:{
        trigger:"#image1",
        scroller:"#main",
        scrub:3,
        // markers:true,
        start:"top 70%",
        // pin:true
    }
})