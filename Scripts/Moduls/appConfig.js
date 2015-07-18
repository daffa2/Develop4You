(function () {
    'use strict';

    angular.module('app').config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainCntrl'
            })

            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutCntrl'
            })

            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainCntrl'
            })

    });

})();