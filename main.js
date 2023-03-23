var lights = document.querySelectorAll('.lights');

tlStart();

function tlStart() {
    lights[0].style.background = "red";
    lights[1].style.background = "transparent";
    lights[2].style.background = "transparent";

    setTimeout(function() {
        lights[1].style.background = "yellow";
    }, 2000);

    setTimeout(function() {
        lights[2].style.background = "green";
        lights[0].style.background = "transparent";
        lights[1].style.background = "transparent";
    }, 4000);

    setTimeout(tlStart, 6000);
}