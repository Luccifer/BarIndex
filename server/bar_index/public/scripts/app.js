(function() {
    var module = angular.module('BarIndex.Admin', [
        'BarIndex.Admin.Main',
        'BarIndex.Admin.BarList',
        'BarIndex.Admin.BarList.Bar',
        'BarIndex.Admin.Users'
    ]);

    var options = function ($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                abstract: true,
                controller: 'BarIndex.Admin.AdminController',
                controllerAs: 'AdminCtrl',
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('app/admin/index.html');
                }]
            })
    };

    options.$inject = ['$stateProvider'];

    module.config(options);
}());
(function() {
    var module = angular.module('BarIndex.Main', []);

    var options = function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('app/main/index.html');
                }]
            })
    };

    options.$inject = ['$stateProvider'];

    module.config(options);
}());
(function() {
    var module = angular.module('BarIndex.Admin.BarList', []);

    var options = function ($stateProvider) {
        $stateProvider
            .state('admin.bars', {
                url: '/bars',
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('app/admin/barList/templates/index.html');
                }]
            })
    };

    options.$inject = ['$stateProvider'];

    module.config(options);
}());
(function() {
    var module = angular.module('BarIndex.Admin.Main', []);

    var options = function ($stateProvider) {
        $stateProvider
            .state('admin.main', {
                url: '/main',
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('app/admin/frontpage/index.html');
                }]
            })
    };

    options.$inject = ['$stateProvider'];

    module.config(options);
}());/**
 * Created by maxim on 05.08.15.
 */

(function() {
    var module = angular.module('BarIndex.Admin.Users', []);

    var options = function ($stateProvider) {
        $stateProvider
            .state('admin.users', {
                url: '/users',
                controller: 'BarIndex.Admin.Users.UsersController',
                controllerAs: 'ctrl',
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('app/admin/users/templates/index.html');
                }]
            });
    };

    options.$inject = ['$stateProvider'];

    module.config(options);
}());
(function(){

    angular.module('Common.Bar',[]);

}());

(function(){
//
    var module = angular.module('Common.Door',['Common.User']);
    var options = function ($stateProvider) {
        $stateProvider
            .state('door', {
                //url: '/door',
                abstract: true,
                templateProvider: ['$templateCache', function($templateCache){
                    return $templateCache.get('app/common/door/index.html');
                }]
            })
            .state('door.login', {
                url: '/login',
                templateProvider: ['$templateCache', function($templateCache){
                    return $templateCache.get('app/common/door/templates/loginView.html');
                }]
            })
    };

    options.$inject = ['$stateProvider'];

    module.config(options);
//
}());
//

(function(){

    angular.module('Common.User',[]);

}());

(function() {
    var module = angular.module('BarIndex.Admin.BarList.Bar', []);

    var options = function ($stateProvider) {
        $stateProvider
            .state('admin.bars.bar', {
                url: '/{id:int}',
                controller: 'BarIndex.Admin.BarList.Bar.BarController',
                controllerAs: 'ctrl',
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('app/admin/barList/bar/templates/bar.html');
                }]
            })
            .state('admin.bars.addBar', {
                url: '/add',
                controller: 'BarIndex.Admin.BarList.Bar.AddBarController',
                controllerAs: 'ctrl',
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('app/admin/barList/bar/templates/addbar.html');
                }]
            });
    };

    options.$inject = ['$stateProvider'];

    module.config(options);
}());
(function(){

    angular.module('BarIndex.Admin').controller('BarIndex.Admin.AdminController', controller);
    controller.$inject = ['UserResource', '$state'];
    function controller(UserResource, $state){
        var self = this;
        UserResource.current.get().then(function(data){
            var access = true;
            if (data === undefined) access = false;
            else if (data === null) access = false;
            else if (data.error) access = false;
            else if (data.permission_level !== 1) access = false;
            if (!access) $state.go('door.login');
            //console.log(data.plain());
        });

    }

}());
(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.BarListController', controller);
    controller.$inject = ['$scope', 'BarResource', '$state'];
    function controller($scope, BarResource, $state){
        var self = this;
        self.addActive = isAddActive;
        self.isBarActive = barActive;

        self.template = 'app/common/partials/barlist.html';
        self.onBar = bar;
        self.onBarAdd = barAdd;

        self.bars = BarResource.list;
        BarResource.updateList();
        $scope.$on('BarResource:updated', function(e, data){
            self.bars = data;
        });

        function isAddActive(){
            return $state.current.name === 'admin.bars.addBar';
        }
        function bar(id){
            $state.go('admin.bars.bar',{id:id});
        }
        function barAdd(){
            $state.go('admin.bars.addBar');
        }

        function barActive(item){
            if ($state.current.name !== 'admin.bars.bar') return false;
            if ($state.params.id === item.id) return true;
            return false;
        }
    }

}());
(function(){

    angular.module('BarIndex.Admin.Users').controller('BarIndex.Admin.Users.UsersController', controller);
    controller.$inject = ['UserResource', '$state'];
    function controller(UserResource, $state){
        var self = this;
        self.users = [];
        UserResource.model.getList().then(function(data){
            self.users = data.plain();
        });
    }

}());
(function(){

    angular.module('Common.Bar').factory('BarResource', resource);
    resource.$inject = ['$rootScope', 'Restangular'];
    function resource($rootScope, Restangular){
        var model_name = 'api/bars';
        var api_endpoint = Restangular.all(model_name);
        //Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred){
        //    console.log(response);
        //    console.log(operation);
        //    console.log(url);
        //    console.log(what);
        //    console.log(deferred);
        //    return data;
        //});

        var methods = {
            model: api_endpoint,
            list: [],
            updateList: updateList,
            photos: function(id){
                return api_endpoint.one(id).one('photos');
            },
            comments: function(id){
                return api_endpoint.one(id).one('comments');
            },
            evaluations: function(id){
                return api_endpoint.one(id).one('evaluations');
            }
        };
        return methods;


        function updateList(){
            api_endpoint.getList().then(function(data){
                methods.list = data.plain();
                $rootScope.$broadcast('BarResource:updated', methods.list);
            })
        }
    }
}());

(function(){

    angular.module('Common.Door').controller('Common.Door.LoginController', controller);
    controller.$inject = ['UserResource', '$state'];
    function controller(UserResource, $state){
        var self = this;

        self.template = 'app/common/door/partials/login.html';
        self.login = login;
        self.data = {
            email: null,
            password: null
        };

        function login(){
            UserResource.login.customPOST({session:self.data}).then(function(data){
                if (data.error) alert(data.error);
                else $state.go('admin.main');
            },function(){
                alert('Server error (5XX)');
            });
        }
    }

}());

(function(){

    angular.module('Common.Door').controller('Common.Door.RegistrationController', controller);
    controller.$inject = ['UserResource'];
    function controller(UserResource){
        var self = this;

        self.template = 'app/common/door/partials/registration.html';

        self.registration = registration;

        self.data = {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        };

        function registration(){
            self.data.password_confirmation = self.data.password;
            console.log(self.data);
            UserResource.model.customPOST({user:self.data}).then(function(data){
                if (data === undefined) {
                    alert('Всё плохо, ничего не работает... Или всё хорошо, и проверяй почту. Особенно папку Спам"');
                    $state.go('admin.main')
                }
                if (data.error) alert(data.error);
                else $state.go('admin.main');
            },function(){
                alert('Server error (5XX)');
            });
        }
    }

}());

(function(){

    angular.module('Common.User').factory('UserResource', resource);
    resource.$inject = ['Restangular'];
    function resource(Restangular){
        var model_name = 'api/users';
        var methods = {
            model: Restangular.all(model_name),
            current: Restangular.all(model_name).one('current'),
            login: Restangular.all(model_name).one('login'),
            //login: Restangular.all('login'),
            logout: Restangular.all(model_name).one('logout'),
            registration: Restangular.all(model_name).one('registration')
        } ;
        return methods;
    }
}());

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
(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.Bar.BarController', controller);
    controller.$inject = ['BarResource', '$state'];
    function controller(BarResource, $state){
        var self = this;

        self.data = {};

        console.log($state.params.id);
        BarResource.model.one(''+$state.params.id+'').get().then(function(data){
            self.data = data.plain();
        });
    }

}());
'use strict';
var app = angular.module('BarIndex', [
    'templates',
    'ui.router',
    'restangular',
    'Common.User',
    'Common.Bar',
    'Common.Door',
    'BarIndex.Main',
    'BarIndex.Admin'
]);

var options = function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
};

options.$inject = ['$urlRouterProvider'];

app.config(options);