var Sessionutils = {

	createToken: function() {
        var username;
        var callback = function(response) {
            App.Models.Login.saveToken(response);
        };

        username = $('#username').val();
        
        App.Models.Login.fetch('username=' + username, sessionStorage.getItem('apiServer') + '/jwt/', callback);
    },

    validateToken: function() {
    	var token;
    	var callback = function (response) {
            if (response != 0) {
                App.Models.Login.saveToken(response);
            } else if (response === 0) {
                history.pushState('', '', '#/login');
                App.Views.Login.render();
                alert("Your session has expired. Please log in again.");
        };
    };
    	token = App.Models.Login.checkToken();
    	App.Models.Login.fetch(token, sessionStorage.getItem('apiServer') + '/jwt/validate/', callback);
    },
};

App.Sessionutils = Sessionutils;