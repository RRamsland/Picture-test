$(document).ready(function(){
	var col1Count=0;
	var col2Count=0;
	var col3Count=0;
	//$(".col").click(function(){
	//	alert($(this).css("background-image"));
	//});
	$(".col1").click(function(){
		if (col1Count===0)
		{
			$(".col1").css("background-image",'url("http://fc01.deviantart.net/fs17/f/2007/129/7/4/Stock_032__by_enchanted_stock.jpg")');
			col1Count++;
		}
		else if (col1Count===1)
		{
			$(".col1").css("background-image",'url("http://images.tentebranda.org/wp-content/uploads/stock-image_6953_1.jpg")');
			col1Count++;
		}
		else
		{
			$(".col1").css("background-image",'url("http://9pixs.com/wp-content/uploads/2014/06/stock-photography_1404139516.jpg")');
			col1Count=0;
		}
	});

	$(".col2").click(function(){
		if (col2Count===0)
		{
			$(".col2").css("background-image",'url("http://images.tentebranda.org/wp-content/uploads/stock-image_6953_1.jpg")');
			col2Count++;
		}
		else if (col2Count===1)
		{
			$(".col2").css("background-image",'url("http://9pixs.com/wp-content/uploads/2014/06/stock-photography_1404139516.jpg")');
			col2Count++;
		}
		else
		{
			$(".col2").css("background-image",'url("http://fc01.deviantart.net/fs17/f/2007/129/7/4/Stock_032__by_enchanted_stock.jpg")');
			col2Count=0;
		}
	});

	$(".col3").click(function(){
		if (col3Count===0)
		{
			$(".col3").css("background-image",'url("http://9pixs.com/wp-content/uploads/2014/06/stock-photography_1404139516.jpg")');
			col3Count++;
		}
		else if (col3Count===1)
		{
			$(".col3").css("background-image",'url("http://fc01.deviantart.net/fs17/f/2007/129/7/4/Stock_032__by_enchanted_stock.jpg")');
			col3Count++;
		}
		else
		{
			$(".col3").css("background-image",'url("http://images.tentebranda.org/wp-content/uploads/stock-image_6953_1.jpg")');
			col3Count=0;
		}
	});
});