var DocumentsView = {

    elem: '#content',
    template: 'documents',

    init: function(pidParam) {
        this.bindEvents(pidParam);
    },

    bindEvents: function(pidParam) {
       App.Views.Documents.create(pidParam);
    },

    render: function(pidParam) {

        $(this.elem).load('app/templates/' + this.template + '.html');
            App.Views.Documents.init(pidParam);
    },

    create: function(pidParam) {

        var callback = function (response) {
            var $divPanel = $('#sub-content');
            
            if (response == 0) {$divPanel.html('No Results Found. <p></p><button class="btn btn-default" onclick="window.history.back();"">Go Back</button>'); return; }

            var doc = '<table class="table table-striped results"><thead>';
            doc += '<tr>';
            doc += '<th scope="col">Type</th>';
            doc += '<th scope="col">Page</th>';
            doc += '<th scope="col">Date</th>';
            doc += '<th scope="col">Language</th>';
            doc += '<th scope="col">Signator</th>';
            doc += '<th scope="col">Image</th>';
            doc += '</tr></thead><tbody>';

            $.each(response, function(id, group){
                doc += '<tr>';
                doc += '<td>' + group.type + '</td>';
                doc += '<td>' + group.page + '</td>';
                doc += '<td>' + group.doc_date + '</td>';
                doc += '<td>' + group.language + '</td>';
                doc += '<td>' + group.signator + '</td>';
                doc += '<td><a href="http://digital.library.du.edu/jcrs/images/common/' + group.ref_no + '.jpg">' + group.ref_no + '</a></td>';
                doc += '</tr>';
            });

            doc += '</tbody></table>';
            $divPanel.html(doc);
        };

        var datastream = "pid=" + pidParam
        var endpoint = '/documents';

        App.Models.Dashboard.fetch(datastream, sessionStorage.getItem('apiServer') + endpoint, 'GET', callback);
    }
};

App.Views.Documents = DocumentsView;