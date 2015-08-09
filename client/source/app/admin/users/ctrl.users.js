(function(){

    angular.module('BarIndex.Admin.Users').controller('BarIndex.Admin.Users.UsersController', controller);
    controller.$inject = ['UserResource', '$state'];
    function controller(UserResource, $state){
        var self = this;
        self.users = [];
        UserResource.model.getList().then(function(data){
            self.users = data.plain();
        });
    }

}());