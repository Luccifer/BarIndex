(function() {
    var module = angular.module('BarIndex.Admin', [
        'BarIndex.Admin.Main'
    ]);

    var options = function ($stateProvider) {
        $stateProvider
            .state('admin', {
                abstract: true,
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
    var module = angular.module('BarIndex.Admin.Main', []);

    var options = function ($stateProvider) {
        $stateProvider
            .state('admin.main', {
                url: '/admin',
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

(function(){

    angular.module('Common.Door').controller('Common.Door.LoginController', controller)
    controller.$inject = ['UserResource'];
    function controller(UserResource){
        var self = this;

        self.template = 'app/common/door/partials/login.html';
        self.login = login;
        self.data = {
            email: null,
            password: null
        };

        function login(){
            UserResource.login.customPOST(self.data).then(function(data){
                console.log(data);
            });
        }
    }

}());

(function(){

    angular.module('Common.Door').controller('Common.Door.RegistrationController', controller)
    controller.$inject = [];
    function controller(){
        var self = this;

        self.template = 'app/common/door/partials/registration.html';
    }

}());

(function(){

    angular.module('Common.User').factory('UserResource', resource);
    resource.$inject = ['Restangular'];
    function resource(Restangular){
        var model_name = 'users';
        var methods = {
            model: Restangular.all(model_name),
            login: Restangular.all(model_name).one('login'),
            //login: Restangular.all('login'),
            logout: Restangular.all(model_name).one('logout'),
            registration: Restangular.all(model_name).one('registration')
        } ;
        return methods;
    }
}());

'use strict';
var app = angular.module('BarIndex', [
    'templates',
    'ui.router',
    'restangular',
    'Common.User',
    'Common.Door',
    'BarIndex.Main',
    'BarIndex.Admin'
]);

var options = function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
};

options.$inject = ['$urlRouterProvider'];

app.config(options);