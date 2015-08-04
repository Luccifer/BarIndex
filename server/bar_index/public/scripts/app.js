(function() {
    var module = angular.module('BarIndex.Admin', []);

    var options = function ($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
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
(function(){
//
    var module = angular.module('Common.Door',[]);
    var options = function ($stateProvider) {
        $stateProvider
            .state('door', {
                url: '/door',
                abstract: true,
                template: '<div ui-view></div>'
                //    ['$templateCache', function($templateCache){
                //    return $templateCache.get('app/common/door/index.html');
                //}]
            })
            .state('login', {
                url: '/login',
                //template: '<div>HELLO</div>'
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
    controller.$inject = [];
    function controller(){
        var self = this;

        self.template = 'app/common/door/partials/login.html';
    }

}());

(function(){

    angular.module('Common.User').factory('UserResource', resource);
    resource.$inject = ['Restangular'];
    function resource(Restangular){
        var model_name = 'user';
        var methods = {
            model: Restangular.all(model_name),
            login: Restangular.all(model_name).one('login'),
            registration: Restangular.all(model_name).one('registration')
        } ;
        return methods;
    }
}());

'use strict';
var app = angular.module('BarIndex', [
    'templates',
    'ui.router',
    //'Common.User',
    'Common.Door',
    'BarIndex.Main',
    'BarIndex.Admin'
]);

var options = function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
};

options.$inject = ['$urlRouterProvider'];

app.config(options);