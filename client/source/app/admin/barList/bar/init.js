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
            .state('admin.bars.add', {
                url: '/add',
                controller: 'BarIndex.Admin.BarList.Bar.AddBarController',
                controllerAs: 'ctrl',
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('app/admin/barList/bar/templates/add.html');
                }]
            })
            .state('admin.bars.edit', {
                url: '/edit/{id:int}',
                controller: 'BarIndex.Admin.BarList.Bar.EditController',
                controllerAs: 'ctrl',
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('app/admin/barList/bar/templates/edit.html');
                }]
            });
    };

    options.$inject = ['$stateProvider'];

    module.config(options);
}());