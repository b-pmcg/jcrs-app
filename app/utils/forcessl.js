if (window.location.protocol != "https:" && window.location.hostname != "localhost") {
    window.location.href = "https:" + window.location.hostname + window.location.pathname;
}
