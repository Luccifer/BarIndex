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