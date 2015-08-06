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