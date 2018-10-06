document.addEventListener("deviceready", function () {
    window.cache.clear( success, error );
    
    if (navigator.network.connection.type == Connection.NONE) {
        $("#home_network_button").text('No Internet Access')
            .attr("data-icon", "delete")
            .button('refresh');
    }
});