

var api = {
	root: "https://api.themoviedb.org/3",
	token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc0MjA2MTU1OGFjODc4ODQ1NThiOTlhZTdiM2U3NSIsInN1YiI6IjU5OTRhMmFmYzNhMzY4NWVjZTAwNDcyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5DfmPktJOB-3H_i7_JTbGuZWcnXFHhFOztfbmq8Jpns" // TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		}
	});
}


console.log("The script loaded!");
testTheAPI();
