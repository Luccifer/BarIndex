(function(){

    angular.module('Common.Door').controller('Common.Door.RegistrationController', controller);
    controller.$inject = ['UserResource'];
    function controller(UserResource){
        var self = this;

        self.template = 'app/common/door/partials/registration.html';

        self.registration = registration;

        self.data = {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        };

        function registration(){
            self.data.password_confirmation = self.data.password;
            console.log(self.data);
            UserResource.model.customPOST({user:self.data}).then(function(data){
                if (data === undefined) {
                    alert('Всё плохо, ничего не работает... Или всё хорошо, и проверяй почту. Особенно папку Спам"');
                    $state.go('admin.main')
                }
                if (data.error) alert(data.error);
                else $state.go('admin.main');
            },function(){
                alert('Server error (5XX)');
            });
        }
    }

}());
