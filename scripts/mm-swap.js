function MM_swapImage() {
    var args = MM_swapImage.arguments;
    document.MM_sr = document.MM_sr || [];
    for (var i = 0; i < (args.length - 2); i += 3) {
        var el = document.getElementById(args[i]) || document.images[args[i]];
        if (el) {
            document.MM_sr.push({ el: el, src: el.src });
            el.src = args[i + 2];
        }
    }
}
function MM_swapImgRestore() {
    var i, x;
    if (document.MM_sr) {
        for (i = 0; i < document.MM_sr.length; i++) {
            x = document.MM_sr[i];
            x.el.src = x.src;
        }
        document.MM_sr = null;
    }
}
