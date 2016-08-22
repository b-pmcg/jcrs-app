var domain = document.domain;
var baseUrl = "";

//check domain and set to host
if (domain === "localhost") {
	baseUrl = "http://" + domain;
} else if (domain === "lib-devdigitaldu.cair.du.edu") {
	baseUrl = "https://" + domain;
} else { 
	baseUrl = "https://digital.library.du.edu";
};