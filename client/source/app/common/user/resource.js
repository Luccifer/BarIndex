(function(){

    angular.module('Common.User').factory('UserResource', resource);
    resource.$inject = ['Restangular'];
    function resource(Restangular){
        var model_name = 'users';
        var methods = {
            model: Restangular.all(model_name),
            login: Restangular.all(model_name).one('login'),
            //login: Restangular.all('login'),
            logout: Restangular.all(model_name).one('logout'),
            registration: Restangular.all(model_name).one('registration')
        } ;
        return methods;
    }
}());
