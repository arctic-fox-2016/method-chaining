// TODO: Refactor for elegance
function shout_backwards(data){
  return data.toUpperCase().split("").reverse().join("")+ "!!!";
}

console.log(shout_backwards("hello, boot"));
