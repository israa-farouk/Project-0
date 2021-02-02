const URL = location.origin; // root domain

// redirects
$("#go-p0").on("click", e => {
    window.location.assign(`${URL}/pages/p0.html`);
});

$("#src-p0").on("click", e => {
    window.location.assign("https://github.com/israa-farouk/Project-0");
});

$("#det-p0").on("click", e => {
    window.location.assign("https://sway.office.com/1z00iwwidGAqklHr?ref=Link");
});