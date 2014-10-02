$(document).ready(function(){
	var col1Count=0;
	$(".col").click(function(){
		alert($(this).css("background-image"));
	});
	$(".col1").click(function(){
		if (col1Count=0)
		{
			$(".col1").css("background-image",'url("http://fc01.deviantart.net/fs17/f/2007/129/7/4/Stock_032__by_enchanted_stock.jpg")');
			col1Count++;
		}
		
	});
});