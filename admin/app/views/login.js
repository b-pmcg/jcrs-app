var LoginView = {

    elem: '#content',
    template: 'login',

    init: function() {
        $('.nav').show();
        $('#authError').hide();
        this.bindEvents();
    },

    bindEvents: function() {
        $('#login').click(function(event) {
            event.preventDefault();
            App.Views.Login.authenticate(event);
        });
    },

    render: function() {
        $('#content').load('app/templates/' + this.template + '.html', function() {
            App.Views.Login.init();
        });
    },

    authenticate: function(event) {

        event.preventDefault();

        var callback = function (response) {

            if (response.auth === true) {
                App.Sessionutils.createToken();
                history.pushState('', '', '#/dashboard/advancedSearch');
                App.Views.AdvancedSearch.render();
            } else {
                console.log("auth failed");
                $('#authError').html('Authentication Failed').show();
            }
        };

        var data = $('#loginForm').serialize();
        App.Models.Login.fetch(data, sessionStorage.getItem('authServer'), callback);
    },
    
    logout: function() {
        App.Models.Login.deleteToken();
        window.history.forward();
        window.location.replace(baseUrl + location.pathname + '#/login');
    },
};

App.Views.Login = LoginView;