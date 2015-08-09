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