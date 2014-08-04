(function() {
	'use strict';

	chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
		var mappingKey = 'nl.sjmulder.urlrewrite.mappings';
		var mappings = JSON.parse(localStorage[mappingKey] || '[]');
		if (/#NOLOOP$/.exec(details.url)) {
			return;
		}
		for (var i = 0; i < mappings.length; i++) {
			var mapping = mappings[i];
			var source_regex = new RegExp(mappings[i].sourceUrl);
			var match = source_regex.exec(details.url);
			if (match) {
				//console.log("MATCHED " + mappings[i].sourceUrl + "\n" + match);
				var expandedDestination = mapping.destinationUrl;
				for( i = 1; i < match.length; i++) {
					expandedDestination = expandedDestination.replace("*"+i, match[i]);
					//console.log("REPLACING *" +i +" with " + match[i] );
				}
				var newUrl = expandedDestination;
				//console.log('rewriting', details.url, 'to', newUrl);

				chrome.tabs.update(details.tabId, { url: newUrl + "#NOLOOP" })
				break;
			}
		}
	});

})();
