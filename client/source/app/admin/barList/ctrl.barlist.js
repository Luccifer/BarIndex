(function(){

    angular.module('BarIndex.Admin.BarList').controller('BarIndex.Admin.BarList.BarListController', controller);
    controller.$inject = ['$scope', 'BarResource', '$state'];
    function controller($scope, BarResource, $state){
        var self = this;
        self.addActive = isAddActive;
        self.isBarActive = barActive;

        self.template = 'app/common/partials/barlist.html';
        self.onBar = bar;
        self.onBarAdd = barAdd;

        self.bars = BarResource.list;
        BarResource.updateList();
        $scope.$on('BarResource:updated', function(e, data){
            self.bars = data;
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

        function barActive(item){
            if ($state.current.name !== 'admin.bars.bar') return false;
            if ($state.params.id === item.id) return true;
            return false;
        }
    }

}());