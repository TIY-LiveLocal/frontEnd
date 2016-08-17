app.controller('matchesCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

    var token = localStorage.getItem('token');
    $scope.firstname = localStorage.getItem('firstname');


    $http({
        method: 'GET',
        url: "https://livelocalrails.herokuapp.com/surveys",
        headers: {
            'Authorization': token
        }
    }).then(function success(response) {
        $scope.userResults = response.data;
    });


    $http({
        method: 'GET',
        url: "https://livelocalrails.herokuapp.com/surveys/matches",
        headers: {
            'Authorization': token
        }
    }).then(function success(response) {
        $scope.matches = response.data;
        var arr = [];

        $scope.viewBiz = function() {
            var vm = this.match;

            arr.push(vm.id);

            localStorage.setItem('name', vm.name);
            localStorage.setItem('address', vm.address);
            localStorage.setItem('city', vm.city);
            localStorage.setItem('zip', vm.zip_code);
            localStorage.setItem('phone', vm.phone);
            localStorage.setItem('longitude', vm.location[1]);
            localStorage.setItem('latitude', vm.location[0]);
            localStorage.setItem('id', vm.id);
            localStorage.setItem('responder_id', vm.responder_id);
            $location.path('/business');
        };

    }, function error(res) {});
}]);
