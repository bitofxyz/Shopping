/**
 * Created by YinFeng-Guo on 14-4-26.
 */
function CartController($scope){
    $scope.products = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    $scope.remove = function(index) {
        $scope.products.splice(index, 1);
    };
}