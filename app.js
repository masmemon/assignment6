// Chapter 21 to 25

// 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert("Welcome: "+ firstName+" "+lastName);

// // 2
// var mobilePhone = prompt("Enter your favourite mobile phone");
// alert("Length of string is: "+ mobilePhone.length);

// // 3
// var findIndex = "Pakistan";
// alert("Pakistan: Index of 'n' is: "+ findIndex.indexOf("n"));

// // 4
// var lastIndex = "Hello World";
// alert("Hello World: Index of last 'l' is: "+ lastIndex.lastIndexOf("l"));

// 5
// var thirdIndex = "Pakistani";
// alert("Pakistani: Letter at 3rd index is: "+ thirdIndex.charAt(3));

// 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName+lastName;
// var a = concat(fullName);
// alert("Welcome: "+ a);

//7
// var city = "Hyderabad";
// document.write(city.replace("Hyder","Islam")+"<br>");
// document.write("Islam"+city.slice(5));


//8
// var text = "Ali & Sami are best friends. They play cricket & football together";
// document.write(text.replace(/&/g,"and"));

//9
// var stringValue = "472"
// document.write("Value: "+stringValue+"<br>");
// var stringValue2 = Number("472")
// document.write("Value: "+stringValue2);


// //10
// var textA = prompt("Enter word");
// alert(textA.toUpperCase());

//11
// var textA = prompt("Enter word");
// var firstLetter = textA.slice(0,1);
// var restLetter = textA.slice(1,500);
// alert(firstLetter.toUpperCase()+restLetter.toLocaleLowerCase());


//12
// var aa = 35.36;
// var a = aa.toString();
// var b = a.indexOf(".");
// var c = a.slice(0,b)+a.slice((b+1),500);
// alert(c);


//13
// var a =prompt("Enter User");
// for(i=0; i<=a.length; i++){
//     if(a[i]=="!" || a[i]=="," || a[i]=="." || a[i]=="@"){
//         alert("Valid name please")
//     }
// }

//14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = prompt("What you want")
// for(i=0; i<=a.length; i++){
//     if(a[i]==b){
//         alert("Available")
//     }
//     else{alert('Not available')}
// }

//15
// var a = prompt("Enter pass");
// for(i=0; i<=a.length; i++){
// if(a.length>=2 && i!=-1){
//     alert("Alaww")
// }
// }

// 16
// var university = "University of Karachi";
// for(i=0; i<=university.length; i++){
//     document.write([university.charAt(i)]+"<br>");
// }

//17
// var c = prompt("Enter input");
// alert("last char is: " + c.slice(-1))

//18
// var s = "The quick brown fox jumps over the lazy dog";
// var u = [];
// for(i=0; i<s.length; i++){
//     if(s.slice(i,i+3).toLowerCase() == "the"){
//       u.push(s.slice(i,i+3));
//     }
// }
// document.write(u.length)


// Chapter 35 to 38

//1
// function dateTime(){
//     var a = new Date();
//     return a;
// }
// document.write(dateTime());

// 2
// function name(){
//     var a = prompt("First Name");
//     var b = prompt("Last Name")
//     var c = a + " " + b;
//     return c;
// }
// document.write("Welcome: "+name());

// 3
// function sum(){
//     var a = +prompt("First Num");
//     var b = +prompt("2nd num")
//     var c = a + b;
//     return c;
// }
// document.write("Sum is: "+sum());


// 4
// function sum(num1, num2=0){
//     var summation = num1+num2;
//     return summation
// }

// function subtract(num1, num2=0){
//     var subtraction = num1-num2;
//     return subtraction
// }

// function multiply(num1, num2=1){
//     var multipliation = num1*num2;
//     return multipliation
// }

// function divide(num1, num2=1){
//     var division = num1/num2;
//     return division
// }

// function mod(num1, num2=1){
//     var modulus = num1%num2;
//     return modulus
// }

// var num1 = +prompt("Enter first num")
// var operator = prompt("Enter operator")
// var num2 = +prompt("Enter 2nd num")

// if(operator=="+"){
//     document.write("Sum is: "+sum(num1,num2));
// } else if(operator=="-"){
//     document.write("Subtraction is: "+subtract(num1,num2));
// } else if(operator=="*"){
//     document.write("Multiplication is: "+ multiply(num1,num2));
// } else if(operator=="/"){
//     document.write("Division is: "+divide(num1,num2));
// } else if(operator=="%"){
//     document.write("Mod is: "+mod(num1,num2));
// } else{ document.write("Wrong input") }


// 5
// function square(){
//     var a = prompt("Enter num");
//     var c = a * a;
//     return c;
// }
// document.write("Square is: "+square());

// // var a = 0;
// var b = 5;
// var c = "--b";
// var d = b * c;
// document.write(d);

// var c = b*(--b)*(--b)*(--b)*(--b);
// document.write(c)

// for(i=5; i>0; i--){
//     // var c = a + (b*i);
//     document.write(b*(b-i)*(b-i)*(b-i)*(b-i));
// }

// for(i=1; i<=5; i++){
//     // var c = a + (b*i);
//     document.write(b*(b-i)*(b-i)*(b-i)*(b-i) + "<br>");
// }


//6 
// function count(){
//     var a = +prompt("Enter start num")
//     var b = +prompt("Enter end num")
//     var c = b-a+1;
//     for(i=1; i<=c; i++){
//         document.write((b-(c-i))+"<br>")
//     }
// }
// document.write(count()+"<br>");

