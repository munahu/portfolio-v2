const app = {};

app.toggleNav = () => {
    $('.nav-icons').click(() => {
        $('.nav-list').toggleClass('hidden');
    })
}

app.init = () => {
    app.toggleNav();
}

$(document).ready(() => {
    app.init();
})