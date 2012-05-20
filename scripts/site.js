$(document).ready(function(){
	if(window.location.hash){
		$('#portfolio').find('[data-id='+window.location.hash.substr(1)+']').click();
	}
});

var index = 0,
	currentIndex = false;
	container = $('#portfolio');
	rows = container.find('.pieces');
	projects = container.find('.piece');
projects.each(function(){
	var project = this;
	(function(index){
		$(project).hover(
			function(){ $(this).addClass('hover'); },
			function(){ $(this).removeClass('hover'); }
		);
		$(project).click(function(){
			closeProject();
			if( currentIndex === index ){
				currentIndex = false;
			} else {
				showProject(index);
				currentIndex = index;
				$(this).addClass('selected');
				window.location.hash = $(this).attr('data-id');
			}
		});
	})(index++)
});
function showProject(index){
	var windowWidth = $('html').innerWidth();
	if( windowWidth > 959 ){
		var afterTarget = Math.floor(index / 3);
		var clearRow = rows[afterTarget];
	} else if( windowWidth > 639 ){
		var afterTarget = ((Math.floor((index + 2) / 2) + 1) * 2) - 3;
		var clearRow = projects[afterTarget]
	} else {
		var afterTarget = index;
		var clearRow = projects[index];
	}
	$('<div class="project large" id="currentProject"></div>')
		.insertAfter(clearRow)
		.html(projectDescriptions[index].html)
		.hide()
		.slideDown(300, 'swing', function() {
			var offsetTop = $(clearRow).offset().top;
			$('html,body').animate({ scrollTop: offsetTop }, 'slow', 'swing');
		});
	$('.cycle').cycle({
		fx: 'scrollLeft',
		timeout: 2000,
		pause: 1
	});
}
function closeProject(){
	projects.each(function(){ $(this).removeClass('selected'); });
	container.find('.large.project').animate({
		opacity: 0.0,
		height: '1px'
	}, 300, 'swing', function(){
		$(this).remove();
		window.location.hash = '';
	});
}
var projectDescriptions = [ 
	{
		html : '<div class="info clearfix"><div class="desc"><p><strong>openNYC</strong> is a new non-profit advocating for New York City government data to be readily available for all to see and use. We believe that no one group has all the answers and that all New Yorkers have the right and the ability to understand data and their government. Started by <a href="http://www.ztownsend.com/">Zachary Townsend</a> and myself, <strong>openNYC</strong> will house open access to this data in a presentable form. Furthermore, our quantitative and design skills will be on call to help interested organizations and individuals successfully utilize their data.</p><ul class="naked"><li>Website: <a href="http://www.opennyc.com/">http://opennyc.com</a></ul></div><ul class="media cycle"><li><img src="assets/cycle/opennyc/opennyc-1.jpg"></li></ul></div>',
		title : 'opennyc'
	},
	{
		html: '<div class="info clearfix"><div class="desc"><p>Thanks to the ubiquitousness of touchscreens, there has been a large push toward developing more natural user interfaces. So-called NUIs find strength in intuitive interactions through direct manipulation and gesture. Consumer products have adopted this new design practice, but many markets remain underserved. 3M wanted to discover new possibilities for leveraging their extensive industrial skills in one such market: education.</p><p>My team and I worked with 3M for eight months to understand the education space and design a prototype fit for the classroom of the future. We analyzed the competition and explored schools and museums across the country to uncover the needs of teachers and their students. The final four months were spent going through multiple rounds of iterating and testing, culminating in a presentation to 3M management.</p><ul class="naked"><li>More info: <a href="http://www.hcii.cmu.edu/M-HCI/2011/3M/">http://www.hcii.cmu.edu/M-HCI/2011/3M/</a></li></ul></div><ul class="media cycle"><li><img src="assets/cycle/3m/3m-1.jpg"></li><li><img src="assets/cycle/3m/3m-2.jpg"></li><li><img src="assets/cycle/3m/3m-3.jpg"></li><li><img src="assets/cycle/3m/3m-4.jpg"></li></ul></div>',
		title: 'pangea'
	},
	{
		html: '<div class="info clearfix"><div class="desc"><p>The last decade has seen massive disruptions in the newspaper industry. With readers and revenue declining by the day, newspapers have been forced to explore new ways to remain relevant. The Pittsburgh Post-Gazette, a local major newspaper, presented this design challenge to Carnege Mellon University in 2009 at the height of the industry\'s downward spiral.</p><p>To understand the role the Post-Gazette, other newspapers, and "news" in general played in the lives of Pittsburgh residents, my team and I conducted interviews with people in various neighborhoods. A blog was also setup to track the changing landscape and provide a dumping ground for cutting-edge ideas. Make tools were also utilized to probe residents\' feelings on authenticity and relevance.</p><p>After synthesizing the information we discovered, we decided to focus our efforts on the city\'s large transient population. The area\'s colleges and cheap cost of living attract many people, but only for a short time. We developed an end-to-end service for turning these temporary residents into true citizens...and readers.</p><ul class="naked"><li>Emotional piece: <a href="http://vimeo.com/30953012">http://vimeo.com/30953012</a></li><li>Process book: <a href="assets/resources/ppg/Post-Gazette_ProcessBook.pdf">Saving The News</a> <small>[PDF]</small></li></div><ul class="media cycle"><li><img src="assets/cycle/ppg/ppg-1.jpg"></li><li><img src="assets/cycle/ppg/ppg-2.jpg"></li><li><img src="assets/cycle/ppg/ppg-3.jpg"></li></ul></div>',
		title: 'ppg'
	},
	{
		html: '<div class="info clearfix"><div class="desc"><p>Surprisingly, it is not the shallow waters or deepest depths of the ocean that is most mysterious to oceanographers, but the bit in the middle. To investigate this area, and especially coral reefs, the Carnegie Mellon University Robotics Department has developed ReefBot, a remote-controlled submersible for automatically cataloguing the many species native to coral reefs. In order to gather pilot data, the robotics department has teamed up with the Pittsburgh Zoo & Aquarium to deploy a fun exhibit in which children can test the robot.</p><p>We worked to design an interface intuitive enough to walk up and use without any training. The exhibit would also see upwards of hundreds of visitors a day, so it needed to provide an entertaining experience in a minimal amount of time. We shadowed visitors during their trips, paying close attention to the information they found most engaging. We incorporated these findings into a short game where pictures acted as trophies and could be taken home as souvenirs.</p><ul class="naked"><li>More info: <a href="http://reefbot.com/">http://reefbot.com/</a></li></ul></div><ul class="media cycle"><li><img src="assets/cycle/reefbot/r-1.jpg"></li><li><img src="assets/cycle/reefbot/r-2.jpg"></li><li><img src="assets/cycle/reefbot/r-3.jpg"></li><li><img src="assets/cycle/reefbot/r-4.jpg"></li></ul></div>',
		title: 'reefbot'
	},
	{
		html: '<div class="info clearfix"><div class="desc"><p>TalkBank is a system for sharing and studying research in human and animal communication. Over 40,000 transcripts have been collected thus far, each converted to a standard CHAT text format. Until recently, these transcripts and the tools created to analyze them were available only offline. To aid in helping researchers around the world gain access to the data, I created an online view of the data. Researchers can open any transcript, watch related media, and perform analyses all in the browser. A local version has also been deployed at the University of Southern Denmark.</p><ul class="naked"><li>Website: <a href="http://talkbank.org/browser">http://talkbank.org/browser</a></li><li>More info: <a href="http://talkbank.org/">http://talkbank.org/</a></ul></div><ul class="media cycle"><li><img src="assets/cycle/chatbrowser/talkbank-1.jpg"></li></ul></div>',
		title: 'chatbrowser'
	},
	{
		html: '<div class="info clearfix"><div class="desc"><p>HiFive is a mobile application for finding interesting people, sessions, and opportunities at conferences. Combining social networking and location awareness, HiFive helps the right people meet each other in a fun and adventurous way.</p><p>Though never implemented, the application was designed in great detail for a graduate level course at Carnegie Mellon University. After choosing a general theme of "meeting", my team interviewed members of the community to uncover the environment in which the most opportunity existed. Professional conferences struck as an untapped market, and we spent the remainder of the semester designing the interface, infrastructure, and investment needed to best meet these users\' needs.</p><ul class="naked"><li>Process reports: <a href="assets/resources/hi5/HiFiveResearchReport.pdf">Research</a> <small>[PDF]</small>, <a href="assets/resources/hi5/HiFiveGenerativeReport.pdf">Generation</a> <small>[PDF]</small>, <a href="assets/resources/hi5/HiFiveFinalReport.pdf">Final</a> <small>[PDF]</small></li></ul></div><ul class="media cycle"><li><img src="assets/cycle/hi5/hi5-1.jpg"></li></ul></div>',
		title: 'hi5'
	},
	{
		html: '<div class="info clearfix"><div class="desc"><p>Surely the greatest boon granted to us by our free will is the opportunity to have cookies whenever we want. So what is the worst of all possible worlds? The one in which you come home only to find the cookie jar completely empty! That\'s why you need Cookieduino, the first ever cookie jar with social networking skills. Pressure sensors in the base measure the weight of the cookies, and <a href="http://twitter.com/cookieduino">the jar tweets</a> whenever cookies are added or removed. LEDs on the cookie jar itself also provide an ambient indication of cookie levels, so no internet connection needed.</p><ul class="naked"><li>Code: <a href="http://pastebin.com/UxH3CQha">http://pastebin.com/UxH3CQha</a></li><li>Twitter: <a href="http://twitter.com/cookieduino">twitter.com/cookieduino</a></li><li>Emotional piece: <a href="http://vimeo.com/30952871">http://vimeo.com/30952871</a></li></ul></div><ul class="media cycle"><li><img src="assets/cycle/cookieduino/c-1.jpg"></li><li><img src="assets/cycle/cookieduino/c-2.jpg"></li><li><img src="assets/cycle/cookieduino/c-3.jpg"></li></ul></div>',
		title: 'cookieduino'
	},
	{
		html: '<div class="info clearfix"><div class="desc"><p>Ever wanted to be Iron Man? John Wayne? The amazing Spider-Man? How about Muhammad Ali? Now you can! Just slap on the Augmented Hyper Reality Glove (AHRG) and it is like you\'ve been pulled straight into a movie. The AHRG translates your moves into bzzts, blams, thwips, pows, or whatever else you can imagine.</p><p>Flex sensors in each of the fingers and a tilt sensor on the wrist connect to a small speaker to play a sound for any gesture you make. The prototype shows the fist and gun gestures, but coding new gestures is as easy as 1, 2, 3. (Seriously. Almost. Each finger is given a number when bent, and the gestures are formed by tracking which combination of fingers are bent.) Version 2.0 with laser upgrade is due in Summer, 2018.</p><ul class="naked"><li>Instructables: <a href="http://www.instructables.com/id/Augmented-Hyper-Reality-Glove/">http://www.instructables.com/id/A-H-R-G/</a></li><li>Code: <a href="http://pastebin.com/BuGpz0dv">http://pastebin.com/BuGpz0dv</a></li><li>Emotional piece: <a href="http://www.youtube.com/watch?v=9CVwyzduAz4">http://y2u.be/watch?v=9CVwyzduAz4</a></li><li>Demo: <a href="http://www.youtube.com/watch?v=jNew7bJC12E">http://y2u.be/watch?v=jNew7bJC12E</a></li></ul></div><ul class="media cycle"><li><iframe src="http://www.youtube.com/embed/9CVwyzduAz4" frameborder="0" allowfullscreen></iframe></li><li><iframe src="http://www.youtube.com/embed/jNew7bJC12E" frameborder="0" allowfullscreen></iframe></li></ul></div>',
		title: 'ahrg'
	},
	{
		html: '<div class="info clearfix"><div class="desc"><p>In 2004, a friend and I began our own internet radio station out of my brother\'s bedroom (which held the only computer I could use). This was a few years after Napster shut down, but streaming music was still young. Better yet, it was surprisingly easy to get record labels to send promotional material for the promise of a review or two. The site ran for four years with changes along the way (dropped the "radio" part and actually added a staff) until closing in 2008.</p><ul class="naked"><li>Website: <a href="http://undressmerobot.com">http://undressmerobot.com</a></li></ul></div><ul class="media cycle"><li><img src="assets/cycle/umr/umr-1.jpg"></li></ul></div>',
		title: 'umr'
	}
];
$(document).ready(function(){
	$("#s").hover(
		function(){
			document.getElementById("s").src = "assets/logo/s.gif";
		},
		function(){
			document.getElementById("s").src = "assets/logo/ss.png";
		}
	);
	if( $.browser.mozilla ){
		$('.ribbon-bottom').css( 'bottom', '-81px' );
	}
});