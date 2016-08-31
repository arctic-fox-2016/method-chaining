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
 class abc {

   findUser(email){
     for (let i=0; i<usersData.length; i++){
       if(usersData[i]["email"]==email){
         this.idx = i;
         break
       } else {

       }
     }
     return this
   }

   formatName(){
     this.name = "Member name: "+ usersData[this.idx]["firstName"] +" "+usersData[this.idx]["lastName"]
     return this
   }

   formatData(){
     this.idno= "ID: "+ usersData[this.idx]["id"]
     this.emaildis= "Email: "+ usersData[this.idx]["email"]
     return this
   }

   displayUser(){
     console.log(this.name)
     console.log(this.idno)
     console.log(this.emaildis)
   }
 };

// Driver code
let userController = new abc()
userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();


// result
// Member name: Squidward Tentacles
// ID: 104
// Email: awesomesquidward@yahoo.com
