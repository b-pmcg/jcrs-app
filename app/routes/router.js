$(function() {

    Path.map("#/dashboard").to(function(){
        App.Views.AdvancedSearch.render();
    });

    Path.map("#/dashboard/advancedSearch").to(function(){
        App.Views.AdvancedSearch.render();
    });

    Path.map("#/dashboard/fullTextSearch").to(function(){
        App.Views.FullTextSearch.render();
    });

    Path.map("#/dashboard/browse").to(function(){
        App.Views.Browse.render();
    });

    Path.map("#/dashboard/patient/:pid").to(function(){
        var pidParam = this.params["pid"];
        App.Views.Patient.render(pidParam);
    });

    Path.map("#/documents/:pid").to(function(){
        var pidParam = this.params["pid"];
        App.Views.Documents.render(pidParam);
    });

    Path.root("#/dashboard/advancedSearch");
    Path.listen();
});
