var UpdateDocumentsView = {

    elem: '#content',
    template: 'updatedocuments',

    init: function(pidParam) {
        this.bindEvents(pidParam);     
    },

    bindEvents: function(pidParam) {
        App.Views.UpdateDocuments.create(pidParam);
    },

    render: function(pidParam) {
        $(this.elem).load('app/templates/' + this.template + '.html');
        App.Views.UpdateDocuments.init(pidParam);
    },

    create: function(pidParam) {

        var callback = function (response) {
            var updateForm = '';
            var did = '';
            var language;
            var docFormArr = '';
            var docFormVal = '';

            updateForm += '<form class="data" id="formOut" role="form">';
            $.each(response, function(id, group){
                updateForm += '<div class="form-group"><label for="type"><span>Type:</span><input id="type" name="type[]" class="form-control" value="' + group.type + '"></label></div>';
                updateForm += '<div class="form-group"><label for="page"><span>Page:</span><input id="page" name="page[]" class="form-control" value="' + group.page + '"></label></div>';
                updateForm += '<div class="form-group"><label for="doc_date"><span>Date:</span><input id="doc_date" name="doc_date[]" class="form-control" value="' + group.doc_date + '"></label></div>';
                updateForm += '<div class="form-group"><label for="language"><span>Language:</span><input id="language" name="language[]" class="form-control" value="' + group.language + '"></label></div>';
                updateForm += '<div class="form-group"><label for="signator"><span>Signator:</span><input id="signator" name="signator[]" class="form-control" value="' + group.signator + '"></label></div>';
                updateForm += '<div class="form-group"><label for="ref_no"><span>Image:</span><input id="ref_no" name="ref_no[]" class="form-control" value="' + group.ref_no + '"></div>';
                updateForm += '<div class="form-group"><input type = "hidden" id="did" name="did[]" class="form-control" value="' + group.did + '"></div>';
            });

            updateForm += '<button id="updateDocs" name="submit" type="submit" class="btn btn-default">Update</button></form><br>';

            var $subContentLeft = $('#sub-content');
            $subContentLeft.html(updateForm);
            
            //patient table update button
            $('#updateDocs').click(function(event) {
                
                event.preventDefault();

                var callbackNew = function() {
                    alert("Successfully Updated.");
                    window.history.back();
                };
                
                var newData = $('.data').serialize();

                App.Models.Dashboard.fetch(newData, sessionStorage.getItem('apiServer') + '/patient/updaterecord/documents/' + pidParam, 'PUT', callbackNew);
            })
        };

        var datastream = "pid=" + pidParam;
        var endpoint = '/documents/';

        App.Models.Dashboard.fetch(datastream, sessionStorage.getItem('apiServer') + endpoint, 'GET', callback);
    }
};

App.Views.UpdateDocuments = UpdateDocumentsView;
