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
