"use strict";

angular.module("MySiteApp")
.config(["$routeProvider", ($routeProvide) => {
    $routeProvider
    .when("/about-me", {
        template: "<about-me></about-me>"
    })
    .when("/resume", {
        template: "<resume></resume>"
    })
    .when("/portfolio", {
        template: "<portfolio></portfolio>"
    })
    .otherwise({
        redirectTo: "/home"
    })
}]);