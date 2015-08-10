(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.Bar.AddBarController', controller);
    controller.$inject = ['BarResource', '$state'];
    function controller(BarResource, $state){
        var self = this;

        self.data = {
            address: null,
            description: null,
            name: null,
            lat: null,
            lng: null,
            price_vodka: null,
            price_long: null,
            price_shot: null,
            price_avg: null
        };

        self.onAdd = add;
        //self.isAddDisabled = true;
        self.onAddressCheck = codeAddress;
        //self.setLatLng = setLatLng;
        //
        //
        //setLatLng(1,2);
        //console.log(self.data);
        //function setLatLng(lat, lng){
        //    self.data.lat = lat;
        //    self.data.lng = lng;
        //}


        function isAddDisabled(){
            console.log(self.data);
            //var res = false;
            if (self.data.lat === null || self.data.lng === null) return true;
            console.log('hello');
            return false;
            //return (self.data.lat === null || self.data.lng === null);
        }

        function add(){
            console.log(self.data);
            if (self.data.name === null || self.data.name.length<2) return;
            BarResource.model.customPOST({bar: self.data}).then(function(data){
                if (data.error) alert(data.error);
                else {
                    $state.go('^');
                    BarResource.updateList();
                }
            })
        }


        var GeoCoder;
        var map;
        function initialize() {
            GeoCoder = new google.maps.Geocoder();
            var mapOptions = {
                center: { lat: -34.397, lng: 150.644},
                zoom: 8
            };
            map = new google.maps.Map(document.getElementById('admin-map'),
                mapOptions);
        }
        var marker;
        function codeAddress() {
            if (marker) {
                marker.setMap(null);
            }
            var address = self.data.address;
            GeoCoder.geocode( { 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location,
                    });
                    map.setZoom(15);
                    self.data.lng = marker.position.K;//долгта
                    self.data.lat = marker.position.G;//широта
                    marker.setDraggable(true);
                    google.maps.event.addListener(marker,'dragend', function(e){
                        self.data.lng = marker.position.K;//долгта
                        self.data.lat = marker.position.G;//широта

                    });
                    self.isAddDisabled = false;
                } else {
                    self.isAddDisabled = true;
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }

}());