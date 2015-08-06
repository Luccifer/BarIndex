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
