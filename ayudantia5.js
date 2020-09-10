$(document).ready(function(){
    var margens = $(".margen");

    margens.mouseenter(function(){
        var margenes = $(this).atrr("id");
        $("#color").text(margenes)
        $(this).fadeTo("fast", 0.5);

    });

    margens.mouseleave(function(){
        $(this).fadeTo("fast", 1);
    });

    margens.click(functio(){
        var margenes = $(this).attr("id");
    })
var escondido = false;
$("#boton1").click(function(){
    if (escondido == true) {
        escondido = false;
        $("div").show();
    } else {
        escondido = true;
        $("div").hide();
    }
})
})