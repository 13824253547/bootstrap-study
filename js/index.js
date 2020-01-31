$(function () {
    $(window).on("resize", function () {

        let clientW = $(window).width();


        let isShowBigImage = clientW >= 800;


        let $allItems = $("#lk_carousel .item");


        $allItems.each(function (index, item) {

            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("' + src + '")';

            $(item).css({
                backgroundImage: imgUrl
            });


            if (!isShowBigImage) {
                let $img = "<img src='" + src + "'>";
                $(item).empty().append($img);
            } else {
                $(item).empty();
            }

        });
    });

    $(window).trigger("resize");

    $('[data-toggle="tooltip"]').tooltip();


    $(window).on("resize", function () {
        let $ul = $("#lk_product>.container>.row>#huangHuang>.nav-tabs ");
        let $allList = $('[role="presentation"]', $ul);
        let ulWidth = 0;
        let screenWidth = $(window).width();

        $allList.each(function (index, item) {
            ulWidth += $(item).width();
        });

        if ($ul.parent().width() < ulWidth) {
            $ul.css({
                width: ulWidth + "px",
            })
        } else {
            $ul.removeAttr("style");
        }
    });
    $(window).trigger("resize");

    let allLis = $("#lk_nav li");

   /* for (let i = 0; i++;i<5){
        $(allLis[i]).on("click", function () {
            $("html,body").animate({scrollTop: $("#lk_hot").offset().top}, 1000);
        });
    }*/
   let s=["#information","#lk_product","#lk_hot","#lk_hot","#lk_link","#lk_footer"];
    for (let i in allLis){
        $(allLis[i]).on("click", function () {
            $("html,body").animate({scrollTop: $(s[i]).offset().top}, 1000);
        });
    }
});