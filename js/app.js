gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
});

// Update CSS variable efficiently using GSAP's ticker
gsap.ticker.add(() => {
    document.body.style.setProperty('--scrollTop', `${smoother.scrollTop()}px`);
});