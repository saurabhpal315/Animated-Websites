// gsap.to('#box',{
//     x:1000,
//     duration:2,
//     delay:1,                     //initial to final
//     backgroundColor:'blue',
//     rotate:260
// })
// gsap.from('#box',{
//     x:1000,
//     duration:2,
//     delay:1,                        //final to initial
//     backgroundColor:'blue',
//     rotate:260
// })
// var tl=gsap.timeline()

// tl.to("#box1",{
//     x:600,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     // delay:1
// })
// tl.to("#box2",{
//     x:600,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     // delay:3
// })
// tl.to("#box3",{
//     x:600,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     // delay:5
// })
var tl=gsap.timeline()
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})
tl.from('#main h1',{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4
    
})
tl.from('img',{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.8,
    stagger:0.5
})
gsap.from('#main .footer div',{
    x:500,
    scale:2,
    duration:1,
    opacity:0,
    stagger:0.2
})