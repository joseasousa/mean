angular.module('contatooh')
.controller('ContatosController',
    function($scope,$http){
       var promise = $http({method: 'GET',url:'/contatos'});

        $scope.incrementa = function(){
            $scope.total++;
        };
});
