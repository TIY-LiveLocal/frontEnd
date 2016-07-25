app.controller('bizController', function() {

    this.data = {
      name : localStorage.getItem('name'),
      address : localStorage.getItem('address'),
      city : localStorage.getItem('city'),
      zip : localStorage.getItem('zip'),
      phone : localStorage.getItem('phone')
    };


  $http({
      method: 'GET',
      url: 'https://livelocalrails.herokuapp.com/find.json',
      data: {location:27701},
      headers: {'Authorization': 'asdf'}

  }).success(function call(data) {
      $scope.businesses = data;


      console.log(data);

  });
