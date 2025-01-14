let tl = gsap.timeline()
tl.from("#nav img, #nav h3,#nav button", {
    y: -100,
    duration: 1,
    opacity: 0,
    delay: 0,
    stagger: 0.2
})
tl.from("#main h1", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1
})
tl.from("#main>img", {
    scale: 0,
    opacity: 0,
    duration: 1.3
    // stagger: 0.2
})

tl.from("h5", {
    scale: 0,
    opacity: 0
})
tl.to("h5", {
    y: 80,
    repeat: -1,
    duration: 0.7,
    yoyo: true
})