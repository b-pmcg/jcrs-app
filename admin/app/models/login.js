var LoginModel = {

    fetch: function(data, url, callback) {

        var request = {};
        request.type = 'POST';
        request.url = url;
        request.data = data;
        request.success = callback;
        http(request);
    },

    saveToken: function(token) {
        sessionStorage.setItem('token', JSON.stringify(token));
    },

    checkToken: function() {
        return sessionStorage.getItem('token');
    },
    
    deleteToken: function() {
        sessionStorage.removeItem('token');
    }
};

App.Models.Login = LoginModel;

