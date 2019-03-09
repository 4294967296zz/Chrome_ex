chrome.tabs.executeScript({
	code:'document.querySelector("body").innerText;'
}, function(result) { 
	// alert(result[0]);
	document.querySelector('#test_div').innerText = result[0];

	// insta_btn click event - creates new chrome tab of my instagram
	document.getElementById('insta_btn').onclick = function() {
	    chrome.tabs.create({
			url: "https://www.instagram.com/dooonnnnnng"
		});
	};

});


