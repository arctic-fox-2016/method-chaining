// TODO: Refactor for elegance


function shout_backwards(data){
  var all_caps = data.toUpperCase();
  var splitting = all_caps.split("");
  var reversing = splitting.reverse();
  var backwards = reversing.join("");
//  return backwards + "!!!";

  return data.toUpperCase().split("").reverse().join("") + "!!!";
}


console.log(shout_backwards("hello, boot"));
