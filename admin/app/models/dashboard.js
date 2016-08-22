var DashboardModel = {

    fetch: function(data, url, type, callback) {
        var request = {};
        request.type = type;
        request.url = url;
        request.data = data;
        request.success = callback;
        http(request);
    }
};

App.Models.Dashboard = DashboardModel;