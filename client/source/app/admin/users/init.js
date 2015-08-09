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