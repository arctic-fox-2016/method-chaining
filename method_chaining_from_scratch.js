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
   currentUser: "",
   findUser: function(string) {
     for (var i = 0; i < usersData.length; i++) {
       if (usersData[i]["firstName"] == string || usersData[i]["lastName"] == string || usersData[i]["email"] == string) {
         this.currentUser = usersData[i];
         break;
       }
     }
     return this;
   },
   formatName: function() {
     this.currentUser.fullName = this.currentUser.firstName + " " + this.currentUser.lastName;
     return this;
   },
   formatData: function() {
     this.currentUser.displayData = "result\n" + "Member name: " + this.currentUser.fullName + "\nID: " + this.currentUser.id + "\nEmail: " + this.currentUser.email;
     return this;
   },
   displayUser: function() {
     console.log(this.currentUser.displayData);
     return this;
   }
 };

// Driver code
userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

// result
// Member name: Squidward Tentacles
// ID: 104
// Email: awesomesquidward@yahoo.com
