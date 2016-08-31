// TODO: Refactor for elegance
function shout_backwards(data){
  var backwards = data.toUpperCase()
                      .split("")
                      .reverse()
                      .join("");
  return backwards + "!!!";
}

console.log(shout_backwards("hello, boot"));
