(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.Bar.BarController', controller);
    controller.$inject = ['BarResource', '$state'];
    function controller(BarResource, $state){
        var self = this;

        self.data = {};

        self.onEdit = edit;


        BarResource.model.one(''+$state.params.id+'').get().then(function(data){
            self.data = data.plain();
            console.log(data.plain());
            initialize();
            BarResource.photos.one(''+self.data.cover).get().then(function(data){
                console.log(data);
                self.data.coverUrl = data.url.url;
            });
            updateAlbum();
        });


        function edit(){
            $state.go("^.edit",{id: $state.params.id});
        }
        function updateAlbum(){
            BarResource.getPhotos(self.data.id).get().then(function(data){
                self.data.album = data.plain();
                console.log(self.data.album);
            });
        }

        var map;
        var marker;
        function initialize() {
            GeoCoder = new google.maps.Geocoder();
            var mapOptions = {
                center: { lat: 55.75585014935258, lng: 37.61785014935258},
                zoom: 8
            };
            map = new google.maps.Map(document.getElementById('map'),
                mapOptions);
            //console.log(self.data);
            if (self.data.lat !== null &&
                self.data.lng !== null) {
                //console.log('init');
                marker = new google.maps.Marker({
                    map: map,
                    position: {
                        lat: self.data.lat,
                        lng: self.data.lng
                    }
                });
                map.setCenter(marker.position);
                map.setZoom(16);
            }
        }
    }

}());