let name1="Ali";
console.log("is person's name =='Ali'? I predict true.")
console.log(name1=='Ali');

let name2="bmw";
console.log("is person's name =='bmw'? I predict false.")
console.log(name2=='ali');

let name3="Ali";
console.log("is person's name =='Ali'? I predict true.")
console.log(name3!='Abdullah');

let name4="bmw";
console.log("is person's name =='bmw'? I predict false.")
console.log(name4!='bmw');

let script = " The world is moving forward in tech.";
let script1=script.toLowerCase();
console.log("is the script in lowercase or not?");
console.log(script1==script1);

let script2 = " The world is moving forward in tech.";
let script3=script2.toUpperCase();
console.log("is the script in uppercase or not?");
console.log(script3!=script3);

let num=2;
let num1=2;
console.log("are the both numbers equal?");
console.log(num==num1);

let num2=2;
let num3=2;
console.log("are the both numbers equal?");
console.log(num2!=num3);

let num4=2;
let num5=5;
console.log("is num4 greater then num5?");
console.log(num4>num5);

let num6=2;
let num7=4;
console.log("is num6 smaller then num7?");
console.log(num6<num7);

let num8=2;
let num9=4;
console.log("is num8 smaller than or equal to num9?");
console.log(num8<=num9);

let num10=2;
let num11=4;
console.log("is num10 greater than or equal to num11?");
console.log(num10>=num11);

let age=15;
let age1=15;
let height=7;
let height1=5;
if( age==age1 && height==height1)
{
    console.log("The height and age is same");
}
else{
    console.log("The hieght and age is not same");
}

let age2=15;
let age3=15;
let height2=7;
let height3=5;
if( age2==age3 || height2==height3)
{
    console.log("The height and age is same");
}
else{
    console.log("The height and age is not same");
}

let arr=[1,2,3,4,5,6,7,8,9];
let check=10;
for ( let i=0;i<9;i++)
{
    if( arr[i]==check)
    {
        console.log("The specific element is present in the array");
    }
    if( arr[i]!=check)
    {
        console.log("The specific element is not present in the array");
        
    }  
}

let arr1=[1,2,3,4,5,6,7,8,9];
let check1=2;
for ( let j=0;j<9;j++)
{
    if( arr1[j]==check1)
    {
        console.log("The specific element is present in the array");
    }
    if( arr1[j]!=check1)
    {
        console.log("The specific element is not present in the array");
        
    } 
}
