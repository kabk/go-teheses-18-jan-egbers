


function init(){

	$(window).scroll(function(){

		var scrollheader = $("#headerOne").offset().top;
		var scrollanchor0 = $("#anchor0").offset().top;
		var scrollanchor1 = $("#anchor1").offset().top;
		var scrollanchor2 = $("#anchor2").offset().top;
		var scrollanchor3 = $("#anchor3").offset().top;
		var scrollanchor4 = $("#anchor4").offset().top;
		var scrollanchor5 = $("#anchor5").offset().top;
		var scrollanchor20 = $("#anchor20").offset().top;
		var	scrollanchor21 = $("#anchor21").offset().top;
		var	scrollanchor22 = $("#anchor22").offset().top;


		if(scrollheader > scrollanchor0 && scrollheader < scrollanchor1){
			$("#headerOne").text("VUILE HANDEN • " + $("#anchor0").text());
		}else if(scrollheader > scrollanchor1 && scrollheader < scrollanchor2){
			$("#headerOne").text("VUILE HANDEN • " + $("#anchor1").text());    	        	
		}else if(scrollheader > scrollanchor2 && scrollheader < scrollanchor3){
			$("#headerOne").text("VUILE HANDEN • " + $("#anchor2").text());		
		}else if(scrollheader > scrollanchor3 && scrollheader < scrollanchor4){
			$("#headerOne").text("VUILE HANDEN • " + $("#anchor3").text());
		}else if(scrollheader > scrollanchor4 && scrollheader < scrollanchor5){
			$("#headerOne").text("VUILE HANDEN • " + $("#anchor4").text());		
		}else if(scrollheader > scrollanchor5){
			$("#headerOne").text("VUILE HANDEN • " + $("#anchor5").text());	
		}else{
			$("#headerOne").text("VUILE HANDEN");
		}
	})
}
window.onload = init();

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});
