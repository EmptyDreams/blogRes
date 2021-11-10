(window, function() {
    console.error(123);
    var el = document.getElementById("aplayer no-destroy no-reload aplayer-withlist aplayer-fixed")
    el.addEventListener('blur', shrink);

    function shrink(e) {
        console.error(1656);
        var player = document.getElementById("aplayer-body")
        player.click()
    }
});