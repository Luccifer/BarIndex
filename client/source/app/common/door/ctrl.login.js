(function(){

    angular.module('Common.Door').controller('Common.Door.LoginController', controller);
    controller.$inject = ['UserResource', '$state'];
    function controller(UserResource, $state){
        var self = this;

        self.template = 'app/common/door/partials/login.html';
        self.login = login;
        self.data = {
            email: null,
            password: null
        };

        function login(){
            UserResource.login.customPOST({session:self.data}).then(function(data){
                if (data.error) alert(data.error);
                else $state.go('admin.main');
            },function(){
                alert('Server error (5XX)');
            });
        }
    }

}());
