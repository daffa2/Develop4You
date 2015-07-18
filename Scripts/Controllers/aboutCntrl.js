(function () {
    'use strict';

    var aboutCntrl = function($scope){

        $scope.message = "Hello from about cntrl";
    };

    angular.module('app').controller('aboutCntrl',['$scope',aboutCntrl])
})();