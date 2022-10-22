let guests = ["Dawood","Bilal","Husnain"];
for( let i = 0 ; i < 3 ; i++)
{
    console.log(guests[i]+" I would like to invite you to dinner placed at my home.");  ;
}

console.log(guests[2]+" Cannot make to the dinner due to personal reasons.");

guests[2]="Wasif";
for( let i = 0 ; i < 3 ; i++)
{
    console.log(guests[i]+" I would like to invite you to dinner placed at my home.");  ;
}

console.log("We found a bigger dinner table.");

guests.unshift("Ali");
guests.push("Ahmed");
guests.splice(1,0,"Abdullah");
for( let i = 0 ; i <6 ; i++)
{
    console.log(guests[i]+" I would like to invite you to dinner placed at my home.");  ;
}

console.log(" I can only invite 2 people only.");

let remove = guests.pop();
console.log(remove+" Sorry can't invite you to dinner.");
console.log(guests);

let remove1 = guests.pop();
console.log(remove1+" Sorry can't invite you to dinner.");
console.log(guests);

let remove2 = guests.pop();
console.log(remove2+" Sorry can't invite you to dinner.");
console.log(guests);

let remove3 = guests.pop();
console.log(remove3+" Sorry can't invite you to dinner.");
console.log(guests);

for( let i=0 ; i<2; i++)
{
    console.log(guests[i]+" you are still invited to the dinner.");
}
console.log("Number of people invited:"+guests.length);