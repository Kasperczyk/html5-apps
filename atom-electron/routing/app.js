var app = angular.module('routingApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/view1', {
        controller: function($scope, $location) {
            $scope.goToView2 = function() {
                $location.path('/view2')
            };
        },
        templateUrl: 'partials/view1.html'
    });
    $routeProvider.when('/view2', {
        controller: function($scope, $location) {
            $scope.goToView1 = function() {
                $location.path('/view1')
            };
        },
        templateUrl: 'partials/view2.html'
    });
    $routeProvider.otherwise({redirectTo: '/view1'});
});
