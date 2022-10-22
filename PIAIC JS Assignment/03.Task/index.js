// Name: Abdullah Mujahid
// Date :10/20/22
// In this program the person's name is being stored in the variable and then it is being written in upper case , lower case and in titlecase.
var name2 = "Eric";

console.log("Person's name in lowercase");
console.log(name2.toLowerCase());

console.log("Person's name in uppercase");
console.log(name2.toUpperCase());

console.log("Person's name in titlecase");


    let index = 0;
    let fromIndex = 0;
    let userTitle = name2[0].toUpperCase();

for (let i = 0; i < name2.length && index != -1; i++) {
  if (fromIndex < name2.length - 1) {
    index = name2.indexOf(" ", fromIndex + 1);

    if (index != -1) {
      userTitle = userTitle + name2.slice(++fromIndex, index + 1);
      userTitle = userTitle + name2[index + 1].toUpperCase();

      fromIndex = index + 1;
    } else {
      userTitle = userTitle + name2.slice(++fromIndex, name2.length);
    }
  }
}

console.log(userTitle + " in Title Case");