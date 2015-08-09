(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.Bar.AddBarController', controller);
    controller.$inject = ['BarResource', '$state'];
    function controller(BarResource, $state){
        var self = this;

        self.data = {
            description: 'test',
            name: 'test',
            price_vodka: 123,
            price_long: 123,
            price_shot: 123,
            price_avg: 123
        };

        self.onAdd = add;

        function add(){
            BarResource.model.customPOST({bar: self.data}).then(function(data){
                if (data.error) alert(data.error);
                else console.log(data);
            })
        }
        self.onAdd();
    }

}());