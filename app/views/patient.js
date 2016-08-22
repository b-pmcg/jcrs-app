var PatientView = {

    elem: '#content',
    template: 'patient',

    init: function(pidParam) {
        this.bindEvents(pidParam);
    },

    bindEvents: function(pidParam) {
        App.Views.Patient.countDocs(pidParam);
    },

    render: function(pidParam) {

        $(this.elem).load('app/templates/' + this.template + '.html');
        App.Views.Patient.init(pidParam);
    },

    countDocs: function(pidParam) {

        var callback = function (response) {
            var docCount = response.length;
            App.Views.Patient.create(pidParam, docCount);
            
        };
        var datastream = "pid=" + pidParam
        var endpoint = '/documents';
        App.Models.Dashboard.fetch(datastream, sessionStorage.getItem('apiServer') + endpoint, 'GET', callback);
    },
    
    create: function(pidParam, docCount) {

        var callback = function (response) {
            var $subContentLeft = $('#sub-content-left');
            var $subContentRight = $('#sub-content-right');
            var lcol = '<table class="table table-striped results"><thead>';
            var rcol = '<table class="table table-striped results"><thead>';
            
            //begin constructing left column
            lcol += '<tr>';
            lcol += '<th></th>';
            lcol += '<th></th>';
            lcol += '</thead><tbody>';
            
            //begin constructing right column
            rcol += '<tr>';
            rcol += '<th></th>';
            rcol += '<th></th></tr>';
            rcol += '</tr></thead><tbody>';
            $.each(response, function(id, group){

                //left column - SQL query returns two JSON objects only cycle through first
                if (id === 0) {
                    lcol += '<tr><th></th><td><h3>' + group.last_name + ', ' + group.first_name + '<p>PID: ' + group.pid + '</h3></td></tr>';
                    lcol += '<tr><th>Alternate Name</th><td>' + group.name_var + '</td></tr>';
                    lcol += '<tr><th>Sex</th><td>' + group.sex + '</td></tr>';
                    lcol += '<tr><th>Admit Age</th><td>' + group.admit_age + '</td></tr>';
                    lcol += '<tr><th>Birth City</th><td>' + group.birth_city + '</td></tr>';
                    lcol += '<tr><th>Birth State</th><td>' + group.birth_state + '</td></tr>';
                    lcol += '<tr><th>Birth Country</th><td>' + group.birth_country + '</td></tr>';
                    lcol += '<tr><th>Came to U.S.</th><td>' + group.when_came_us + '</td></tr>';
                    lcol += '<tr><th>Occupation</th><td>' + group.occupation + '</td></tr>';
                    lcol += '<tr><th>Previous Address</th><td>' + group.prev_addr + '</td></tr>';
                    lcol += '<tr><th>Previous City</th><td>' + group.prev_city + '</td></tr>';
                    lcol += '<tr><th>Previous State</th><td>' + group.prev_state + '</td></tr>';
                    lcol += '<tr><th>Duration of Disease</th><td>' + group.duration_disease + '</td></tr>';
                    lcol += '<tr><th>Contracted City</th><td>' + group.contracted_city + '</td></tr>';
                    lcol += '<tr><th>Contracted State</th><td>' + group.contracted_state + '</td></tr>';
                    lcol += '<tr><th>Contracted Country</th><td>' + group.contracted_country + '</td></tr>';
                    lcol += '<tr><th>Civil Condition</th><td>' + group.civil_cond + '</td></tr>';
                    lcol += '<tr><th>Number of Children</th><td>' + group.numb_child + '</td></tr>';
                    lcol += '<tr><th>Notes</th><td>' + group.notes + '</td></tr>';
                    lcol += '<tr><th>Admin Notes</th><td>' + group.admin_notes + '</td></tr>';
                }

                //right column
                rcol += '<tr><th>' + group.date_type + '</th><td>' + group.date + '</td></tr>';
            });
            
            lcol += '</tbody></table>';
            $subContentLeft.html(lcol);

            rcol += '</tbody></table>';           
            //Only display link to documents if they exist
            if (docCount > 0) {
                rcol += '<div class="link"><a href="#/documents/' + pidParam + '">Documents (' + docCount + ')</a></div>';
            } else {
                rcol += '<div class="link"><p>No digitized copies available at this time, but original copies maintained at the Beck Archives.</p></div>';
            }

            $subContentRight.html(rcol);
        };

        var datastream = "pid=" + pidParam;
        var endpoint = '/patient';
        
        App.Models.Dashboard.fetch(datastream, sessionStorage.getItem('apiServer') + endpoint, 'GET', callback);
    }
};

App.Views.Patient = PatientView;
