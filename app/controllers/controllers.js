/**
 * Created by YinFeng-Guo on 14-4-26.
 */
function CartController($scope){
    $scope.products = [
        {title: 'Paint pots', quantity: 8, price: 1},
        {title: 'Polka dots', quantity: 17, price: 2},
        {title: 'Pebbles', quantity: 5, price: 3}
    ];
    $scope.totalMoney = 0;

    $scope.remove = function(index) {
        $scope.products.splice(index, 1);
    };

    $scope.computeTotalMoney = function(){
        console.log('products::'+$scope.products);
        $scope.totalMoney = 0;
        for(var i=0; i<$scope.products.length; i++){
            $scope.totalMoney += $scope.products[i].price * $scope.products[i].quantity;
        }
        console.log(i);
    }

    $scope.$watch('products', $scope.computeTotalMoney, true);
}