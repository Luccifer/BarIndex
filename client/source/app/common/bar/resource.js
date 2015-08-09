(function(){

    angular.module('Common.Bar').factory('BarResource', resource);
    resource.$inject = ['Restangular'];
    function resource(Restangular){
        var model_name = 'bars';
        //Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred){
        //    console.log(response);
        //    console.log(operation);
        //    return data;
        //});
        var methods = {
            model: Restangular.all(model_name),
            photos: function(id){
                return Restangular.all(model_name).one(id).one('photos');
            },
            comments: function(id){
                return Restangular.all(model_name).one(id).one('comments');
            },
            evaluations: function(id){
                return Restangular.all(model_name).one(id).one('evaluations');
            }
        } ;
        return methods;
    }
}());
