var hovering = "";

$(".stemage").hover(
    function () {
        $("tr.stemage").addClass("highlight");
        $(".band.stemage").addClass("showoutline");
        hovering = "stemage";
    },
    function () {
        $("tr.stemage").removeClass("highlight");
        $(".band.stemage").removeClass("showoutline");
        hovering = "";
    }
);

$(".danimal").hover(
    function () {
        $("tr.danimal").addClass("highlight");
        $(".band.danimal").addClass("showoutline");
        hovering = "danimal";
    },
    function () {
        $("tr.danimal").removeClass("highlight");
        $(".band.danimal").removeClass("showoutline");
        hovering = "";
    }
);
$(".kirby").hover(
    function () {
        $("tr.kirby").addClass("highlight");
        $(".band.kirby").addClass("showoutline");
        hovering = "kirby";
    },
    function () {
        $("tr.kirby").removeClass("highlight");
        $(".band.kirby").removeClass("showoutline");
        hovering = "";
    }
);
$(".chunckstyle").hover(
    function () {
        $("tr.chunckstyle").addClass("highlight");
        $(".band.chunckstyle").addClass("showoutline");
        hovering = "chunckstyle";
    },
    function () {
        $("tr.chunckstyle").removeClass("highlight");
        $(".band.chunckstyle").removeClass("showoutline");
        hovering = "";
    }
);
$(".cheddar").hover(
    function () {
        $("tr.cheddar").addClass("highlight");
        $(".band.cheddar").addClass("showoutline");
        hovering = "cheddar";
    },
    function () {
        $("tr.cheddar").removeClass("highlight");
        $(".band.cheddar").removeClass("showoutline");
        hovering = "";
    }
);

$(".imgwrapper, table").hover(function () {
    $(this).click(function () {
        if (hovering != "") {
            console.log(hovering);
        }
    });
});
