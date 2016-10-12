app.directive("scroll", ["$window", function ($window) {
    return function (scope, element, attrs) {
        // angular.element($window).bind("scroll", function() {
        //     scope.$apply(scope.showContent = this.pageYOffset >= 600 ? true : false);
        // });
        
        
        angular.element($window).bind("scroll", function () {
            if (this.pageYOffset >= 500) {
                scope.testText = "1";
            }
            else {
                scope.testText = "2";
            }

            // var element = angular.element(document).find("#section4");
            // if(this.pageYOffset >= element.offset().top){
            //     scope.testText = "section4";
            // }
            // else{
            //     scope.testTet = "section2";
            // }
            scope.$apply();
        });

    };
}]);