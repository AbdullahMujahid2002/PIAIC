let place = ["Chitral","Skardu","Kalash","Gawader"];
for( let i=0;i<4;i++)
{
    console.log(place[i]);
}
console.log("In alphabetical order");
for( let i=0;i<4;i++)
{
    console.log(place.slice().sort()[i]);
}

console.log("In reverse alphabetical order");
for( let i=0;i<4;i++)
{
    console.log(place.slice().sort().reverse()[i]);
}

console.log("In reverse  order");
for( let i=0;i<4;i++)
{
    console.log(place.slice().reverse()[i]);
}
console.log("Original array");
for( let i=0;i<4;i++)
{
    console.log(place[i]);
}
console.log("In alphabetic  order");
for( let i=0;i<4;i++)
{
    console.log(place.sort()[i]);
}
console.log("Original array");
for( let i=0;i<4;i++)
{
    console.log(place[i]);
}
console.log("In reverse  order");
for( let i=0;i<4;i++)
{
    console.log(place.reverse()[i]);
}
console.log("Original array");
for( let i=0;i<4;i++)
{
    console.log(place[i]);
}