 // The data store:
 var usersData = [
   {firstName:"SpongeBob", lastName:"SquarePants", email:"spongebob@crustycrab.com", id:102},
   {firstName:"Patrick", lastName:"Star", email:"patric.star@gmail.com", id:103},
   {firstName:"Squidward", lastName:"Tentacles", email:"awesomesquidward@yahoo.com", id:104}
 ]

 function titleCaseName(str)
 {

 }
   // Our object with the chainable methods
 var userController = {

 };

// Driver code
userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

// result
// Member name: Squidward Tentacles
// ID: 104
// Email: awesomesquidward@yahoo.com
