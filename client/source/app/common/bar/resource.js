(function(){

    angular.module('Common.Bar').factory('BarResource', resource);
    resource.$inject = ['$rootScope', 'Restangular'];
    function resource($rootScope, Restangular){
        var model_name = 'api/bars';
        var api_endpoint = Restangular.all(model_name);
        //Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred){
        //    console.log(response);
        //    console.log(operation);
        //    console.log(url);
        //    console.log(what);
        //    console.log(deferred);
        //    return data;
        //});

        var methods = {
            model: api_endpoint,
            list: [],
            updateList: updateList,
            photos: Restangular.all('api').one('bar_photos'),
            getPhotos: function(bar_id){
                return api_endpoint.one(''+bar_id).one('photos');
            },
            comments: function(id){
                return api_endpoint.one(id).one('comments');
            },
            evaluations: function(id){
                return api_endpoint.one(id).one('evaluations');
            }
        };
        return methods;


        function updateList(){
            api_endpoint.getList().then(function(data){
                methods.list = data.plain();
                $rootScope.$broadcast('BarResource:updated', methods.list);
            })
        }
    }
}());
