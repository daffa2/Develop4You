(function(){
   'use strict';

    var mainCntrl  = function($scope){
        console.log('mainCntrl');

        $scope.message = "Hello from main cntrl";
    };

    angular.module('app').controller('mainCntrl',['$scope',mainCntrl]);

})();