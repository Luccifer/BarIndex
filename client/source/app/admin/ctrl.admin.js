(function(){

    angular.module('BarIndex.Admin').controller('BarIndex.Admin.AdminController', controller);
    controller.$inject = ['UserResource', '$state'];
    function controller(UserResource, $state){
        var self = this;
        UserResource.current.get().then(function(data){
            var access = true;
            if (data === undefined) access = false;
            else if (data === null) access = false;
            else if (data.error) access = false;
            else if (data.permission_level !== 1) access = false;
            if (!access) $state.go('door.login');
            //console.log(data.plain());
        });

    }

}());