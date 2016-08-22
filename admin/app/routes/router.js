$(function() {

    function checkAuth() {
        App.Sessionutils.validateToken();
    };

    Path.map("#/login").to(function(){
        App.Views.Login.render();
    });

    Path.map("#/logout").to(function(){
        App.Views.Login.logout();
    });

    Path.map("#/dashboard").to(function(){
        checkAuth();
        App.Views.AdvancedSearch.render();
    });

    Path.map("#/dashboard/advancedSearch").to(function(){
        checkAuth();
        App.Views.AdvancedSearch.render();
    });

    Path.map("#/dashboard/pidSearch").to(function(){
        checkAuth();
        App.Views.PidSearch.render();
    });

    Path.map("#/dashboard/fullTextSearch").to(function(){
        checkAuth();
        App.Views.FullTextSearch.render();
    });

    Path.map("#/dashboard/browse").to(function(){
        checkAuth();
        App.Views.Browse.render();
    });

    Path.map("#/dashboard/patient/:pid").to(function(){
        checkAuth();
        var pidParam = this.params["pid"];
        App.Views.Patient.render(pidParam);
    });

    Path.map("#/dashboard/updateRecord/:pid").to(function(){
        checkAuth();
        var pidParam = this.params["pid"];
        App.Views.UpdateRecord.render(pidParam);
    });

    Path.map("#/documents/:pid").to(function(){
        checkAuth();
        var pidParam = this.params["pid"];
        App.Views.Documents.render(pidParam);
    });

     Path.map("#/dashboard/updateRecord/documents/:pid").to(function(){
        checkAuth();
        var pidParam = this.params["pid"];
        App.Views.UpdateDocuments.render(pidParam);
    });

    Path.root("#/login");
    Path.listen();
});
