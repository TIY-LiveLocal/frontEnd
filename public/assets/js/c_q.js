app.controller('cqController', ['$http', '$scope', '$location',
    function($http, $scope, $location) {

        //nav bar toggle
        $scope.dropDown = false;
        $scope.hiring = false;
        $scope.glutFree = false;
        $scope.musicians = false;
        $scope.lgbt = false;
        $scope.livWage = false;
        $scope.localFood = false;
        $scope.minorityOwned = false;
        $scope.petFriend = false;
        $scope.artsCrafts = false;
        $scope.charNonprof = false;
        $scope.sustain = false;
        $scope.veganPeta = false;
        $scope.claimBusiness = false;

        $scope.clicked = function() {

            data = {
                hiring: $scope.hiring,
                glutFree: $scope.glutFree,
                musicians: $scope.musicians,
                lgbt: $scope.lgbt,
                livWage: $scope.livWage,
                localFood: $scope.localFood,
                minorityOwned: $scope.minorityOwned,
                petFriend: $scope.petFriend,
                artsCrafts: $scope.artsCrafts,
                charNonprof: $scope.charNonprof,
                sustain: $scope.sustain,
                veganPeta: $scope.veganPeta
            };

            var token = localStorage.getItem('token');

            $http({
                method: 'POST',
                url: "https://livelocalrails.herokuapp.com/surveys",
                data: data,
                headers: {
                    'Authorization': token
                }
            }).then(function success(response) {
                $location.path('/you');
            }, function error(response) {});

        };
    }
]);
