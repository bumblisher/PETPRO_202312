$(function(){
	// 햄버거 메뉴
	$(".btn_menu").on("click", function(){
        $(this).toggleClass("on");
		$("html,body").toggleClass("menu_on");
    }); 

	$(".tab_btn button").on("click", function(){
		var idx = $(this).parent().index();

		$(this).parents(".tab_box").find(".tab_btn button").removeClass("on");
		$(this).addClass("on");
		$(this).parents(".tab_box").find(".tab_cont > li").removeClass("on");
		$(this).parents(".tab_box").find(".tab_cont > li").eq(idx).addClass("on");
	});
	
});




