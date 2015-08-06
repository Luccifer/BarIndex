(function() {
    var module = angular.module('BarIndex.Admin.Main', []);

    var options = function ($stateProvider) {
        $stateProvider
            .state('admin.main', {
                url: '/admin',
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
