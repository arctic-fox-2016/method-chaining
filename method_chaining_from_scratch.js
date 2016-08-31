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
  user : {},
  formatedData : "",
  formatedName : "",
  findUser(email){
    for (var i = 0; i < usersData.length; i++) {
      if(usersData[i]["email"] = email){
        this.user = usersData[i]
        break
      }
    }
    return this
  },
  formatName(){
    this.formatedName = "Member name: "+this.user["firstName"]+" "+this.user["lastName"]
    return this
  },
  formatData(){
    this.formatedData = "ID: "+this.user["id"]+"\n"+"Email:"+this.user["email"]
    return this
  },
  displayUser(){
    console.log(this.formatedName);
    console.log(this.formatedData);
  }
};

// Driver code
userController.findUser("awesomesquidward@yahoo.com")
.formatName()
.formatData()
.displayUser();

// result
// Member name: Squidward Tentacles
// ID: 104
// Email: awesomesquidward@yahoo.com
