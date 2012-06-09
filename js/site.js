var Sugarman = function () {
	var root = this;
	
	root.projects = {};

	root.init = function () {
		// load projects into root.projects
		$('#projects .piece').each(function(){
			var project = $(this).attr('data-id');
			root.load(project);
		});
	
		// if example.com/#projectName then show the project
		if (window.location.hash.substring(1) !== '') {
			var project = window.location.hash.substring(1);
			root.show(project);
		}

		// event listener for animating the logo
		$("#s").hover(
			function(){
				$(this).attr('src', "assets/logo/s.gif");
			},
			function(){
				$(this).attr('src', "assets/logo/ss.png");
			}
		);
		
		// event listener for hashchange
		$(window).hashchange(function () {
			if (window.location.hash.substring(1) !== '') {
				var project = window.location.hash.substring(1);
				root.show(project);
			} else {
				$('#content').slideUp(600, function () {
					setTimeout(function(){
						$('#intro').slideDown();
						root.scrollToTop(400);
					}, 200);
				});
			}
		});
		
		// event listener for clicking a project link
		$('#projects').on('click', '.piece', function () {
			var project = $(this).attr('data-id');
			if (window.location.hash === '#'+project) root.scrollToTop();
			else window.location.hash = project;
		});
	}
	
	root.load = function (project, callbackFunc) {
		if (root.projects[project] === undefined) {
			$.get('texts/'+project+'.html', function (response) {
				root.projects[project] = response;
				if (callbackFunc) callbackFunc(project);
			});
		}
	}
	
	root.show = function (project) {
		// if the project text has not loaded
		if (root.projects[project] === undefined) {
			// run load() with show() as callback
			root.load(project, root.show);
			return;
		} else {
			var text = root.projects[project];
		}
		
		// show the project
		if ($('#intro').is(':visible')) slideUp('#intro', 400);
		else slideUp('#content', 600);
		function slideUp (el, speed) {
			root.scrollToTop(speed);
			$(el).slideUp(speed, function(){
				setTimeout(function(){
					$('#content .container').html(text);
					$('#content').slideDown(800);
				}, 200);
			});
		}				
	}
	
	root.scrollToTop = function (speed) {
		speed = (speed) ? speed : 200;
		$('html, body').animate({scrollTop:0}, speed);
	}

};

var spencer = new Sugarman();
spencer.init();