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