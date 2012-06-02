$("#s").hover(
	function(){
		$(this).attr('src', "assets/logo/s.gif");
	},
	function(){
		$(this).attr('src', "assets/logo/ss.png");
	}
);

var texts = {};

if (window.location.hash.substring(1) !== '') {
	var project = window.location.hash.substring(1);
	load(project, function(){
		$('#intro').hide();
		$('#content .container').html(texts[project]).parent().show();
	});
}

$('#projects .piece').each(function(){
	var project = $(this).attr('data-id');
	load(project);
});

function load (project, callbackFunc) {
	if (texts[project] === undefined) {
		$.get('texts/'+project+'.html', function (response) {
			texts[project] = response;
			if (callbackFunc) callbackFunc();
		});
	}
}

function show (project) {
	var text;
	if (texts[project] === undefined) {
		$.get('texts'/+a+'.html', function (response) {
			text = texts[project] = response;
		});
	} else {
		text = texts[project];
	}
	if ($('#intro').is(':visible')) slideUp('#intro', 400);
	else slideUp('#content', 600);
	function slideUp (el, speed) {
		scrollToTop(speed);
		$(el).slideUp(speed, function(){
			setTimeout(function(){
				$('#content .container').html(text);
				$('#content').slideDown(800);
			}, 200);
		});
	}				
}

function scrollToTop (speed) {
	speed = (speed) ? speed : 200;
	$('html, body').animate({scrollTop:0}, speed);
}

$(window).hashchange(function () {
	if (window.location.hash.substring(1) !== '') {
		var project = window.location.hash.substring(1);
		show(project);
	} else {
		$('#content').slideUp(600, function () {
			setTimeout(function(){
				$('#intro').slideDown();
				scrollToTop(400);
			}, 200);
		});
	}
});

$('#projects').on('click', '.piece', function () {
	var project = $(this).attr('data-id');
	if (window.location.hash === '#'+project) scrollToTop();
	else window.location.hash = project;
});
