const app = {};

app.animations = () => {
    gsap.from(".name__letter", {
        x: -50,
        duration: 6,
        stagger: {
            from: "left",
            amount: 1.5
          }
    });
}

app.toggleNav = () => {
    $('.nav-icons').click(() => {
        $('nav').toggleClass('hidden');
        $('.menu-icon').toggleClass('hidden');
        $('body').toggleClass('lock');
        $('.featured-work-circle').toggleClass('hidden');
        $('.scroll').toggleClass('hidden');
    })

    $('.nav-links').click(() => {
        $('nav').toggleClass('hidden');
        $('.menu-icon').toggleClass('hidden');
        $('body').toggleClass('lock');
        $('.featured-work-circle').toggleClass('hidden');
        $('.scroll').toggleClass('hidden');
    })
}

app.init = () => {
    app.toggleNav();
    app.animations();
}

$(document).ready(() => {
    app.init();
})