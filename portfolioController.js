app.controller('portfolioController', function ($scope) {
    //$scope.x

    $scope.testText = "Content";
    var waypoint = new Waypoint({
        element: document.getElementById('section4'),
        handler: function (direction) {
            // $scope.testText = "Changed"
            // $scope.$digest;
        }
    })

});