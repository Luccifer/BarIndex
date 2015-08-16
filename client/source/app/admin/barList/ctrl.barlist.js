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
            setCovers();
        });

        function setCovers(){
            for (var key in self.bars){
                var bar = self.bars[key];
                setCover(bar);
            }
        }
        function setCover(bar){
            console.log('hello');
            if (bar.cover === null) return;
            BarResource.photos.one(''+bar.cover).get().then(function(data){
                console.log(data.plain());
                bar.coverUrl = data.url.url;
            });
        }

        function isAddActive(){
            return $state.current.name === 'admin.bars.addBar';
        }
        function bar(id){
            $state.go('admin.bars.bar',{id:id});
        }
        function barAdd(){
            $state.go('admin.bars.add');
        }

        function barActive(item){
            if ($state.current.name !== 'admin.bars.bar') return false;
            if ($state.params.id === item.id) return true;
            return false;
        }
    }

}());