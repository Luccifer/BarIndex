(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.Bar.AddBarController', controller);
    controller.$inject = ['BarResource', '$state'];
    function controller(BarResource, $state){
        var self = this;

        self.data = {
            name: null
        };

        self.onAdd = add;
        self.isAddDisabled = isAddDisabled;


        function isAddDisabled(){
            return (self.data.name === null || self.data.name === "");
        }

        function add(){
            console.log(self.data);
            if (self.data.name === null || self.data.name.length<2) return;
            BarResource.model.customPOST({bar: self.data}).then(function(data){
                if (data.error) alert(data.error);
                else {
                    console.log(data);
                    BarResource.updateList();
                    $state.go('^.edit', {id: data.id});
                }
            })
            //$state.go('^.edit', {id: 9});
        }
    }

}());