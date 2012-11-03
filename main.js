var sources = [];

function getSettings(cb) {
	chrome.extension.sendMessage({option: "settings"}, function(response) {
	  	sources = response.sources.toLowerCase().split('\n');
	  	if(response.mashable == "true") {
			sources.push('mashable');
		}
		if(response.techcrunch == "true") {
			sources.push('techcrunch');
		}
		cb();
	});
}

function hideArticles() {
	$('.newsfeed .interest[title="Go to this publisher feed"]').each(function(i, item) {
		if(sources.indexOf($(item).html().toLowerCase()) >= 0) {
			var article = $(item).parents('.article');
			console.log("Hid post with title " + $('.title h3 a', article).html());
			$(article).remove();
		}
	});
}


$(document).ready(function(){
	console.log('Loaded Prismatic Source Excluder');

	getSettings(hideArticles);
	
	$(window).on('scroll', hideArticles);
});
