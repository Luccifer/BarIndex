(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.Bar.EditController', controller);
    controller.$inject = ['$stateParams', 'BarResource', '$state'];
    function controller($stateParams, BarResource, $state){
        var self = this;

        self.barId = $stateParams.id;
        self.common = {
            address: null,
            description: null,
            name: null,
            lat: null,
            lng: null
        };
        self.price = {
            price_vodka: null,
            price_long: null,
            price_shot: null
        };
        self.photos = {
            cover: null,
            newPhotoUrl: null,
            album:[],
            updateAlbum: updateAlbum
        };
        self.commonUpdate = commonUpdate;
        self.priceUpdate = priceUpdate;
        self.coverUpdate = coverUpdate;
        self.removePhoto = removePhoto;
        self.addPhoto = addPhoto;
        self.isCommonUpdateDisabled = isCommonUpdateDisabled;
        self.isPriceUpdateDisabled = isPriceUpdateDisabled;
        self.isCoverUpdateDisabled = isCoverUpdateDisabled;
        self.isAddPhotoDisabled = isAddPhotoDisabled;

        self.onAddressCheck = codeAddress;
        self.setCoverCandidate = setCoverCandidate;

        function removePhoto(){
            BarResource.photos.one(''+self.photos.cover).remove().then(function(){
                updateAlbum();
                self.photos.cover = null;
            });
            //updateAlbum();
        }

        function setCoverCandidate(photo){
            self.photos.cover = photo.id;
            self.photos.selected = photo;
        }

        function updateAlbum(){
            BarResource.getPhotos(self.barId).get().then(function(data){
                self.photos.album = data;
            });
        }

        initData();
        function initData(){
            BarResource.model.get(self.barId).then(function(data){
                console.log(data);
                //data.route = "";
                self.originalBar = data;
                for (var key in self.common){
                    if (data[key]) self.common[key] = data[key];
                }
                for (var key in self.price){
                    if (data[key]) self.price[key] = data[key];
                }
                for (var key in self.photos){
                    if (data[key]) self.photos[key] = data[key];
                }

                initialize();
                self.photos.updateAlbum();
            });
        }


        function isCommonUpdateDisabled(){
            var flag = true;
            var data = self.common;
            for (var key in data){
                if (self.originalBar[key] !== undefined && self.originalBar[key] !== data[key]){
                    flag = false;
                }
            }
            return flag;
        }
        function commonUpdate(){
            if (isCommonUpdateDisabled()) return;
            if(prepareUpdate(self.common)){
                self.originalBar.put().then(BarResource.updateList());
            }
        }
        function isPriceUpdateDisabled(){
            var flag = true;
            var data = self.price;
            for (var key in data){
                if (self.originalBar[key] !== undefined && self.originalBar[key] !== data[key]){
                    flag = false;
                }
            }
            return flag;
        }
        function priceUpdate(){
            if (isPriceUpdateDisabled()) return;
            if(prepareUpdate(self.price)){
                self.originalBar.put().then(BarResource.updateList());
            }
        }
        function isCoverUpdateDisabled(){
            return (self.originalBar.cover === self.photos.cover);
        }
        function coverUpdate(){
            if (isCoverUpdateDisabled()) return;
            console.log(self.photos);
            if(prepareUpdate(self.photos)){
                self.originalBar.put().then(function(){
                    BarResource.updateList();
                    self.photos.cover = null;
                });
            }
        }
        function isAddPhotoDisabled(){
            return (self.photos.newPhotoUrl === "" || self.photos.newPhotoUrl === null);
        }
        function addPhoto(){
            if (isAddPhotoDisabled()) return;
            var data = {bar_photo:{
                bar_id: self.barId,
                url_remote: self.photos.newPhotoUrl
            }};
            console.log(data);
            BarResource.photos.customPOST(data).then(function(data){
                console.log(data.plain());
                self.photos.newPhotoUrl = null;
                self.photos.updateAlbum();
            });
        }

        function prepareUpdate(data){
            var flag = false;
            for (var key in data){
                if (self.originalBar[key] !== undefined && self.originalBar[key] !== data[key]){
                    self.originalBar[key] = data[key];
                    flag = true;
                }
            }
            return flag;
        }




        var GeoCoder;
        var map;
        var marker;
        function initialize() {
            GeoCoder = new google.maps.Geocoder();
            var mapOptions = {
                center: { lat: 55.75585014935258, lng: 37.61785014935258},
                zoom: 8
            };
            map = new google.maps.Map(document.getElementById('admin-map'),
                mapOptions);
            //console.log(self.common);
            if (self.common.lat !== null &&
                self.common.lng !== null) {
                //console.log('init');
                marker = new google.maps.Marker({
                    map: map,
                    position: {
                        lat: self.common.lat,
                        lng: self.common.lng
                    }
                });
            }
        }

        function codeAddress() {
            if (marker) {
                marker.setMap(null);
            }
            var address = self.common.address;
            GeoCoder.geocode( { 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location,
                    });
                    map.setZoom(15);
                    self.common.lng = marker.position.K;//долгта
                    self.common.lat = marker.position.G;//широта
                    marker.setDraggable(true);
                    google.maps.event.addListener(marker,'dragend', function(e){
                        self.common.lng = marker.position.K;//долгта
                        self.common.lat = marker.position.G;//широта
                        console.log(self.common);

                    });
                    self.isAddDisabled = false;
                } else {
                    self.isAddDisabled = true;
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        }
        //setTimeout(function(){initialize()},1000);
    }

}());