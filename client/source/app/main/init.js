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