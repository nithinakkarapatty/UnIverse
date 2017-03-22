angular.module("ui", ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/main.html"
    })
    .when("/add", {
        templateUrl : "partials/add.html",
        controller : "addressHelperParentController",
        controllerAs : "ahpc"
    })
    .when("/update", {
        templateUrl : "partials/update.html"
    });
});