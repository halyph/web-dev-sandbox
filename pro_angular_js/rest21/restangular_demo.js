angular.module("exampleApp", [ "restangular"])
    .constant("baseUrl", "http://localhost:2403/")
    .controller("defaultCtrl", function ($scope, $http, Restangular, baseUrl) {

        Restangular.setBaseUrl(baseUrl);
        Restangular.setDefaultHeaders({'Content-Type': 'application/json; charset=UTF-8'});


        Restangular.addRequestInterceptor(function (element, operation, what, url) {
            console.info(arguments);
        });

        $scope.listProducts = function () {
            Restangular.all('products').getList().then(function(products) {
                $scope.products = products;
            });
        }

        $scope.listProducts();
    });
