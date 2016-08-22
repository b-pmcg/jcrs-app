var http = function(request) {

    request.crossDomain = true;
    request.cache = false;

    request.onload = function () {
    };

    request.complete = function () {
    };

    request.error = function (xhr, status) {
        $('#content').html('There is an Error');
        $('#apierror').html(status + ': There was an error.').show();
    };

    request.statusCode = {
        200: function() {
            //console.log('ok');
        },
        404: function() {
            //console.log('Page not found.');
            location.href = baseUrl + location.pathname + '#/login';
        },
        401: function() {
            //console.log('Access Denied.');
            location.href = baseUrl + location.pathname + '#/login';
        },
        403: function() {
            //console.log('Forbidden');
            location.href = baseUrl + location.pathname + '#/login';
        }
    };

    function openModal() {
        document.getElementById('modal').style.display = 'inherit';
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    $(document).ajaxStart(function () {
        openModal();
    });

    $(document).ajaxStop(function () {
        closeModal();
    });

    $.ajax(request);
};