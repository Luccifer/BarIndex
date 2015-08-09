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

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.BarListController', controller);
    controller.$inject = ['BarResource', '$state'];
    function controller(BarResource, $state){
        var self = this;
        self.addActive = isAddActive;

        self.template = 'app/common/partials/barlist.html';
        self.onBar = bar;
        self.onBarAdd = barAdd;

        self.bars = [];
        BarResource.model.getList().then(function(data){
            self.bars = data.plain();
        },function(){
            console.log('Server error');
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
    resource.$inject = ['Restangular'];
    function resource(Restangular){
        var model_name = 'bars';
        //Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred){
        //    console.log(response);
        //    console.log(operation);
        //    return data;
        //});
        var methods = {
            model: Restangular.all(model_name),
            photos: function(id){
                return Restangular.all(model_name).one(id).one('photos');
            },
            comments: function(id){
                return Restangular.all(model_name).one(id).one('comments');
            },
            evaluations: function(id){
                return Restangular.all(model_name).one(id).one('evaluations');
            }
        } ;
        return methods;
    }
}());

(function(){

    angular.module('Common.Door').controller('Common.Door.LoginController', controller);
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
            UserResource.login.customPOST({user:self.data}).then(function(data){
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

(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.Bar.AddBarController', controller);
    controller.$inject = ['BarResource', '$state'];
    function controller(BarResource, $state){
        var self = this;

        self.data = {
            description: 'test',
            name: 'test',
            price_vodka: 123,
            price_long: 123,
            price_shot: 123,
            price_avg: 123
        };

        self.onAdd = add;

        function add(){
            BarResource.model.customPOST({bar: self.data}).then(function(data){
                if (data.error) alert(data.error);
                else console.log(data);
            })
        }
        self.onAdd();
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