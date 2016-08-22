var App = {

    Views: {},
    Models: {},

    initialize: function() {
        //console.log('initializing the app...');
        sessionStorage.setItem('appName', 'University of Denver - JCRS');
        sessionStorage.setItem('apiServer', baseUrl + '/jcrs-service/index.php');
        sessionStorage.setItem('authServer', baseUrl + '/jcrs-service/index.php/api/v1/authenticate');
    }
};

App.initialize();