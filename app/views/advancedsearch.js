var AdvancedSearchView = {

    elem: '#content',
    template: 'advancedsearch',

    init: function() {
        this.bindEvents();
    },

    bindEvents: function() {

        $('#advancedSearch').click(function(event) {
            event.preventDefault();
            App.Views.AdvancedSearch.create(event);
        });

        $('input.form-control').keypress(function(event) {
            if (event.which == 13) {
                App.Views.AdvancedSearch.create(event);
            }
        });
    },
    
    render: function() {

        $(this.elem).load('app/templates/' + this.template + '.html', function() {
            App.Views.AdvancedSearch.init();
        });
    },
    
    create: function(event) {

        event.preventDefault();

        var callback = function (response) {
            
            var $divPanel = $('#sub-content');
            
            if (response == 0) {$divPanel.html('No Results Found. <p></p><button class="btn btn-default" onclick="location.reload();"">Go Back</button>'); return; }

            var doc = '<button class="btn btn-default" onclick="location.reload();"">Start Over</button><table class="table table-striped results"><thead>';
            doc += '<tr>';
            doc += '<th scope="col">Patient Name</th>';
            doc += '<th scope="col">Sex</th>';
            doc += '<th scope="col">Admit Age</th>';
            doc += '<th scope="col">Occupation</th>';
            doc += '<th scope="col">Birth Country</th>';
            doc += '<th scope="col">Contracted City</th>';
            doc += '<th scope="col">Contracted State</th>';
            doc += '<th scope="col">Contracted Country</th>';
            doc += '</tr></thead><tbody>';

            $.each(response, function(id, group){
                doc += '<tr>';
                doc += '<td><a href="#/dashboard/patient/' + group.pid + '">' + group.last_name + ', ' + group.first_name + '</a></td>';
                doc += '<td>' + group.sex + '</td>';
                doc += '<td>' + group.admit_age + '</td>';
                doc += '<td>' + group.occupation + '</td>';
                doc += '<td>' + group.birth_country + '</td>';
                doc += '<td>' + group.contracted_city + '</td>';
                doc += '<td>' + group.contracted_state + '</td>';
                doc += '<td>' + group.contracted_country + '</td>';
                doc += '</tr>';
            });

            $divPanel.html(doc);
            doc += '</tbody></table>';
        };

        var datastream = $('.data').serialize();
        var endpoint = '/patients/search';

        App.Models.Dashboard.fetch(datastream, sessionStorage.getItem('apiServer') + endpoint, 'GET', callback);
    }
};

App.Views.AdvancedSearch = AdvancedSearchView;