var domain = document.domain;
var baseUrl = "";
console.log("domain: " + domain);

//check domain and set to host
if (domain === "localhost") {
	console.log("first condition true");
	baseUrl = "http://" + domain;
} else if (domain === "lib-devdigitaldu.cair.du.edu") {
	baseUrl = "https://" + domain;
} else { 
	baseUrl = "https://digital.library.du.edu";
};

var apiS = sessionStorage.getItem('apiServer')
console.log("api server: " + apiS);

console.log("baseUrl: " + baseUrl);

//old code
//Local Development
// var baseUrl = "http://localhost";

// Development Server
//var baseUrl = "https://lib-devdigitaldu.cair.du.edu";

//Production Server
// var baseUrl = "https://digital.library.du.edu";