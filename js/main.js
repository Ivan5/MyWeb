$(function(){
	//Carousel
	$('#owl-demo').owlCarousel({
		navigation: false,
		pagination: false,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});

	new WOW().init();


});