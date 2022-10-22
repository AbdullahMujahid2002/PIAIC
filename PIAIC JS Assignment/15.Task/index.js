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

console.log("Number of people invited:"+guests.length);