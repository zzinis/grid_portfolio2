$("body").on("click", "section .item", function(e){
    e.preventDefault();

    let imgSrc = $(this).find("a").attr("href");
    var obj ={
        func : function(){}
    };


    $("body").append(
        $("<div class = 'pop'>")
            .append(
                $("<img>").attr({src: imgSrc}),
                $("<span>").text("close")
            )
    )
});

$("body").on("click", ".pop span", function(){
    $(".pop").fadeOut(800,function(){
        $(this).remove();
    })
});