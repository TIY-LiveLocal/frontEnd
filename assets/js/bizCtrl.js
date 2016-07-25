app.controller('bizController', function() {

    this.data = {
      name : localStorage.getItem('name'),
      address : localStorage.getItem('address'),
      city : localStorage.getItem('city'),
      zip : localStorage.getItem('zip'),
      phone : localStorage.getItem('phone')
    };

    console.log(this.data.name);


  });
