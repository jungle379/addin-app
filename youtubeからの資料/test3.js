function callApi(){
  fetch("https://jsonplaceholder.typicode.com/users")
   .then(function(res) {
    return res.json();
  })
   .then(function(users) {
    console.log(users);
  });
}

callApi();