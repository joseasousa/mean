angular.module('contatooh')
.controller('ContatosController',
    function($scope){
        $scope.contatos = [
            {
            "_id": 1,
            "nome": "Contato Angular 1",
            "email": "cont1@empresa.com.br"
        },
            {
            "_id": 2,
            "nome": "Contato Angular 2",
            "email": "cont2@empresa.com.br"
        },

            {
            "_id": 3,
            "nome": "Contato Angular 3",
            "email": "cont3@empresa.com.br"
        },{
            "_id": 4,
            "nome": "Contato Angular 4",
            "email": "cont4@empresa.com.br"
        },
            {
            "_id": 5,
            "nome": "Contato Angular 5",
            "email": "cont5@empresa.com.br"
        }
        ];
        $scope.filtro='';

        $scope.incrementa = function(){
            $scope.total++;
        };
});
