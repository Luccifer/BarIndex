(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.Bar.BarController', controller);
    controller.$inject = ['BarResource', '$state'];
    function controller(BarResource, $state){
        var self = this;

        self.data = {};

        console.log($state.params.id);
        BarResource.model.one(''+$state.params.id+'').get().then(function(data){
            self.data = data.plain();
        });
    }

}());