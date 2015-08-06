(function(){

    angular.module('Common.Door').controller('Common.Door.LoginController', controller)
    controller.$inject = ['UserResource'];
    function controller(UserResource){
        var self = this;

        self.template = 'app/common/door/partials/login.html';
        self.login = login;
        self.data = {
            email: null,
            password: null
        };

        function login(){
            UserResource.login.customPOST(self.data).then(function(data){
                console.log(data);
            });
        }
    }

}());
