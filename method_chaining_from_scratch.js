 // The data store:
 var usersData = [
   {firstName:"SpongeBob", lastName:"SquarePants", email:"spongebob@crustycrab.com", id:102},
   {firstName:"Patrick", lastName:"Star", email:"patric.star@gmail.com", id:103},
   {firstName:"Squidward", lastName:"Tentacles", email:"awesomesquidward@yahoo.com", id:104}
 ]

 function titleCaseName(str)
  {
   return str;
  }
  // Our object with the chainable methods
  var userController = {

   currentUser:"",
   findUser:function (userEmail) {
    var arrayLength = usersData.length, i;
    for (i = arrayLength - 1; i >= 0; i--) {
     if (usersData[i].email === userEmail) {
      this.currentUser = usersData[i];
      break;
     }
    }

    return this;
   },
   formatName:function () {
    if (this.currentUser) {
     this.currentUser.fullName = titleCaseName (this.currentUser.firstName) + " " + titleCaseName (this.currentUser.lastName);
    }
    return this;

   },

   formatData:function () {
    if (this.currentUser) {
     this.currentUser.viewData = "Member name: " + this.currentUser.fullName +'\n'+"ID: " + this.currentUser.id +'\n'+ "Email: " + this.currentUser.email;
    }
    return this;
   },

   displayUser:function () {
    if (!this.currentUser) return;

    return(this.currentUser.viewData);

   }
  };


// Driver code

console.log(userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser());

// result
// Member name: Squidward Tentacles
// ID: 104
// Email: awesomesquidward@yahoo.com
