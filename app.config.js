"use strict";

angular.module("MySiteApp")
.config(["$routeProvider", ($routeProvider) => {
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
    .when("/home", {
        template: "<home></home>"
    })
    .otherwise({
        redirectTo: "/home"
    })
}]);