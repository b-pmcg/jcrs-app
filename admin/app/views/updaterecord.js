var UpdateRecordView = {

    elem: '#content',
    template: 'updaterecord',

    init: function(pidParam) {
        this.bindEvents(pidParam);
    },

    bindEvents: function(pidParam) {
        App.Views.UpdateRecord.create(pidParam);
    },

    render: function(pidParam) {

        $(this.elem).load('app/templates/' + this.template + '.html');
        App.Views.UpdateRecord.init(pidParam);

    },

    create: function(pidParam) {

        var callback = function (response) {
            var responseData = response[0];

            var $subContentLeft = $('#sub-content-left');
            var $subContentRight = $('#sub-content-right');

            var updateForm = '<form class="data" role="form">';
            var updateFormRight = '<form class="datesdata" role="form">';
            
            updateForm += '<div class="form-group"><label for="first_name">First Name:</label><input name="first_name" class="form-control" value="' + responseData.first_name + '"></div>';
            updateForm += '<div class="form-group"><label for="last_name">Last Name:</label><input name="last_name" class="form-control" value="' + responseData.last_name + '"></div>';
            updateForm += '<div class="form-group"><label for="sex">Sex:</label><input name="sex" class="form-control" value="' + responseData.sex + '"></div>';
            updateForm += '<div class="form-group"><label for="admit_age">Admit Age:</label><input name="admit_age" class="form-control" value="' + responseData.admit_age + '"></div>';
            updateForm += '<div class="form-group"><label for="occupation">Occupation:</label><input name="occupation" class="form-control" value="' + responseData.occupation + '"></div>';
            updateForm += '<div class="form-group"><label for="birth_city">Birth City:</label><input name="birth_city" class="form-control" value="' + responseData.birth_city + '"></div>';
            updateForm += '<div class="form-group"><label for="birth_state">Birth State:</label><input name="birth_state" class="form-control" value="' + responseData.birth_state + '"></div>';
            updateForm += '<div class="form-group"><label for="birth_country">Birth Country:</label><input name="birth_country" class="form-control" value="' + responseData.birth_country + '"></div>';
            updateForm += '<div class="form-group"><label for="when_came_us">Came to US:</label><input name="when_came_us" class="form-control" value="' + responseData.when_came_us + '"></div>';
            updateForm += '<div class="form-group"><label for="prev_addr">Previous Address:</label><input name="prev_addr" class="form-control" value="' + responseData.prev_addr + '"></div>';
            updateForm += '<div class="form-group"><label for="prev_city">Previous City:</label><input name="prev_city" class="form-control" value="' + responseData.prev_city + '"></div>';
            updateForm += '<div class="form-group"><label for="prev_state">Previous State:</label><input name="prev_state" class="form-control" value="' + responseData.prev_state + '"></div>';
            updateForm += '<div class="form-group"><label for="duration_disease">Duration of Disease:</label><input name="duration_disease" class="form-control" value="' + responseData.duration_disease + '"></div>';
            updateForm += '<div class="form-group"><label for="contracted_city">Contracted City:</label><input name="contracted_city" class="form-control" value="' + responseData.contracted_city + '"></div>';
            updateForm += '<div class="form-group"><label for="contracted_state">Contracted State:</label><input name="contracted_state" class="form-control" value="' + responseData.contracted_state + '"></div>';
            updateForm += '<div class="form-group"><label for="contracted_country">Contracted Country:</label><input name="contracted_country" class="form-control" value="' + responseData.contracted_country + '"></div>';
            updateForm += '<div class="form-group"><label for="civil_cond">Civil Condition:</label><input name="civil_cond" class="form-control" value="' + responseData.civil_cond + '"></div>';
            updateForm += '<div class="form-group"><label for="numb_child">Number of Children:</label><input name="numb_child" class="form-control" value="' + responseData.numb_child + '"></div>';
            updateForm += '<div class="form-group"><label for="notes">Notes:</label><textarea name="notes" class="form-control">' + responseData.notes + '</textarea></div>';
            updateForm += '<div class="form-group"><label for="admin_notes">Admin Notes:</label><textarea name="admin_notes" class="form-control">' + responseData.admin_notes + '</textarea></div>';
            
            //update form button
            updateForm += '<button id="updateForm" name="submit" type="submit" class="btn btn-default">Update</button></form>';

            $.each(response, function(id, group){
            //right column
                updateFormRight += '<div class="form-group"><label for="' + group.date_type + '">' + group.date_type + ':</label><input name="date' + group.did + '" class="form-control" value="' + group.date + '"><input type=hidden name="did' + group.did + '" value="' + group.did + '"></div>';
            });

            updateFormRight += '</form>';

            $subContentLeft.html(updateForm);
            $subContentRight.html(updateFormRight);

            //patient table update button
            $('#updateForm').click(function(event) {

                event.preventDefault();

                var callbackNew = function() {
                    var $subContL2 = $('#sub-content-left');

                    $subContL2.html(updateForm);
                };

                var callbackNewDates = function() {
                    var $subContR2 = $('#sub-content-right');
                    $subContR2.html(updateFormRight);
                    alert("Successfully Updated.");
                    window.history.back();
                };

                var newData = $('.data').serialize();

                App.Models.Dashboard.fetch(newData, sessionStorage.getItem('apiServer') + '/patient/updaterecord/' + pidParam, 'PUT', callbackNew);

                var newDataDates = $('.datesdata').serialize();

                App.Models.Dashboard.fetch(newDataDates, sessionStorage.getItem('apiServer') + '/patient/updaterecord/dates/' + pidParam, 'PUT', callbackNewDates);
            })
        };

        var datastream = "pid=" + pidParam;
        var endpoint = '/patient/';

        App.Models.Dashboard.fetch(datastream, sessionStorage.getItem('apiServer') + endpoint, 'GET', callback);
    }
};

App.Views.UpdateRecord = UpdateRecordView;