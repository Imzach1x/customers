// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  fetch('https://randomuser.me/api/?results=12')

.then(function(response){
  return response.json();
})

.then(function(user){
  console.log(users);
  var users=name;
  for (var i = 0; i < users; i++) {
    users(user);
}

function saySomething() {
}
});

})();
