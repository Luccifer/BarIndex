(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.BarListController', controller);
    controller.$inject = ['BarResource', '$state'];
    function controller(BarResource, $state){
        var self = this;
        self.addActive = isAddActive;

        self.template = 'app/common/partials/barlist.html';
        self.onBar = bar;
        self.onBarAdd = barAdd;

        self.bars = [];
        BarResource.model.getList().then(function(data){
            self.bars = data.plain();
        },function(){
            console.log('Server error');
        });
        function isAddActive(){
            return $state.current.name === 'admin.bars.addBar';
        }
        function bar(id){
            $state.go('admin.bars.bar',{id:id});
        }
        function barAdd(){
            $state.go('admin.bars.addBar');
        }
    }

}());