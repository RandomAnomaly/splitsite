app.controller('portfolioController', function ($scope) {
    //$scope.x

    $scope.testText = "Content";
    var waypoint = new Waypoint({
        element: document.getElementById('section4'),
        handler: function (direction) {
            console.log('Scrolled to waypoint!')
        }
    })

    // var waypoint = new Waypoint({
    //     element: document.getElementById('section4'),
    //     handler: function(direction){
    //         console.log('Scrolled to waypoint!')
    //     }
    // });


});