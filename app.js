//-------Alert-------
//1.
// alert("Asslam O Alikum")
//2.
// alert("Error! Please enter a valid password");
//3.
// alert("Welcome to JS Land...\nHappy Coding!")
//4.
// alert("Welcome to JS Land...")
// alert("Happy Coding!")

//-------Variable for Strings-------
//1.
// var userName;
// var myName = "SAIF ULLAH";
// var message = "HELLO WORLD";
// alert(message)
//2.
// var stdName = "ALI";
// alert(stdName);
// var age = "21 years old";
// alert(age);
// var designation = "CERTIFIED Mobile Application Developer";
// alert(designation)
//3.
// var pyramid = "PIZZA\nPIZZ\nPIZ\nPI\nP"
//4.
// var email = "saifullahanwrar455@gmail.com";
// alert("My email address is " + email)
//5.
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);
//6.
// document.write("Yeh! I can write HTML content through JS");
//7.
// var end = "_________________$$^#^$$_________________ ";
// alert(end)

//-------Variable for Numbers-------
//1.
// var age = 21;
// alert("I am " + age + " years old");
//2.
// var visitors = 31;
// alert("You have visited this site " + visitors + " times");
//3.
// var birthYear = 1998;
// document.write("My birth year is " + birthYear + "<br />");
// document.write("Datatype of my declared variable is number");
//4.
// var visitorsName = "HASSAN";
// var productTitle = "KURTA BAJAMA";
// var quantity = 7;
// document.write(visitorsName + " ordered " + quantity + " " + productTitle + " on daraz.pk");

//-------Variable Name Legal and Illegal-------
//1.
// var _ , r_1, $ali;
// _ = 1;
// r_1 = 2;
// $ali = 3;
// alert(_ + r_1 + $ali);
//2.
// var $water, _lion_, ali123, abidALi, a909b;
// var %water, +lion+, 123ali, abid ali, 2mango2;
//3.
// document.write("<h1>" + "Rules for naming JS variables" + "</h1>");
// document.write("Variable names can only contain letters, numbers, dollar sign, underscore." + "<br />");
// document.write("Variables must begin with a letters, Dollar sign or Underscore" + "<br />");
// document.write("Variable names are case sensitive" + "<br />");
// document.write("Variable names should not be JS Keywords" + "<br />");

//---------Math Expressions---------
//1.
// var a = 2;
// var b = 90;
// var result = a + b;
// document.write("Sum of " + a + " and " + b + " is " + result);
//2.
// var a = 21;
// var b = 9;
// var result = a - b;
// document.write("Difference of " + a + " and " + b + " is " + result);
// var a = 2;
// var b = 90;
// var result = a * b;
// document.write("Product of " + a + " and " + b + " is " + result);
// var a = 200;
// var b = 90;
// var result = a / b;
// document.write("Division of " + a + " and " + b + " is " + result); 
// var a = 90;
// var b = 8;
// var result = a % b;
// document.write("Remainder of " + a + " and " + b + " is " + result);
//3.
// var a;
// document.write("Value after variable declaration is " + a + "<br />");
// a = 101; 
// document.write("Initial Value: " + a + "<br />");
// a++;
// document.write("Value after increment is " + a + "<br />");
// a = a + 7;
// document.write("Value after addition is " + a + "<br />");
// --a;
// document.write("Value after decrement is " + a + "<br />");
// a = a % 7;
// document.write("The remainder is " + a);
//4.
// var ticketPrice = 3030;
// var noOftickets = 7;
// var totalCost = ticketPrice * noOftickets; 
// document.write("Ticket Price for buying " + noOftickets + " tickets to a movie is " + totalCost);
//5.
// var tableNo = 4;
// var multiplier = 1;
// var result;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
//6.
// var tempCel;
// tempCel = 25;
// var tempFar;
// tempFar = (tempCel * 9/5) + 32;
// document.write(tempCel + "oC  = " + tempFar + "oF" + "<br />");
// tempFar = 70;
// tempCel = 5/9 * (tempFar - 32);
// document.write(tempFar + "oF  = " + tempCel + "oC" + "<br />");
//7.
// var priceOfitem1 = 390;
// var priceOfitem2 = 9090;
// var orderedquantityOfitem1 = 23;
// var orderedquantityOfitem2 = 13;
// var shippingCharges = 500;
// document.write("<h1>" + "Shopping Cart" + "</h1>" + "<br />");
// document.write("Price of Item 1 = " + priceOfitem1 + "<br />");
// document.write("Quantity of Item 1 is " + orderedquantityOfitem1 + "<br />");
// document.write("Price of Item 2 = " + priceOfitem2 + "<br />");
// document.write("Quantity of Item 2 is " + orderedquantityOfitem2 + "<br />");
// document.write("Shipping Charges : " + shippingCharges + "<br />" + "<br />" );
// var tot = (orderedquantityOfitem1 * priceOfitem1) + (orderedquantityOfitem2 * priceOfitem2) + shippingCharges;
// document.write("Total Cost of Your Order is " + tot);
//8.
// var totMarks = 600;
// var obtMarks = 480;
// var per = (obtMarks * 100) / totMarks;
// document.write("Total Marks : " + totMarks + "<br />");
// document.write("Obtained Marks : " + obtMarks + "<br />");
// document.write("Percentage : " + per);
//9.
// var dollars = 10;
// var riyals = 25;
// var pkr = (dollars * 104.80) + (riyals * 28);
// document.write("<h1>" + "CURRENCY in PKR" + "</h1>" + "<br />");
// document.write("Total Currency in PKR is " + pkr);
//10.
// var num = 6;
// document.write("Add 5 to " + num + " is " + (num + 5) + "<br />");
// document.write("Multiply 10 by " + num + " is " + (num * 10) + "<br />");
// document.write("Divide " + num + " by 2 is " +  (num / 2) + "<br />");
//11.
// var currentYear = 2020;
// var birthYear = 1998;
// var age = currentYear - birthYear;
// document.write("Current Year : " + currentYear + "<br />" + "Birth Year : " + birthYear + "<br />" + "My age is " + age);
//12.
// document.write("<h1>" + "The GEOMETERIZER" + "</h1>");
// var radius = 20;
// var circum = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;
// document.write("Radius of Circle : " + radius + " m" + "<br />" + "Circumference : " + circum + " m" + "<br />" + "Area of Circle : " + area + " sq.m");
//13.
// document.write("<h1>" + "The Lifetime Supply Calculator" + "</h1>");
// var snack = "Party";
// var curr_age =22;
// var est_age = 65;
// var quanity = 5;
// document.write("Faviourate Snack = " + snack + "<br />");
// document.write("Your Current Age = " + curr_age + "<br />");
// document.write("Estimate Maximum Age = " + est_age + "<br />");
// document.write("Amount of Snacks Per day = " + quanity + "<br />");
// document.write("You will need " + (est_age - curr_age) * quanity + " to last you until the ripe old age of " +  est_age);

//---------Math Expression (Unfamiliar)---------
//1.
// var a = +prompt("Enter a numeric value : ");
// document.write("<h3>" + "Results" + "</h3>");
// document.write("The value of a is : " + a + "<br />");
// document.write("................................." + "<br />" + "<br />");
// ++a;
// document.write("The value of ++a is : " + a + "<br />");
// document.write("Now the value of a is : " + a + "<br />" + "<br />");

// document.write("The value of a++ is : " + a++ + "<br />");
// document.write("Now the value of a is : " + a + "<br />" + "<br />");

// document.write("The value of --a is : " + --a + "<br />");
// document.write("Now the value of a is : " + a + "<br />" + "<br />");

// document.write("The value of a-- is : " + a-- + "<br />");
// document.write("Now the value of a is : " + a + "<br />" + "<br />");

//2.
// var a = 4, b = 1;
// document.write("<h4>" + "STEPS" + "</h4>")
// w = --a;
// document.write("--a is " + w + "<br />");
// x = w - --b;
// document.write("--a - --b is " + x + "<br />")
// y = x + ++b;
// document.write("--a - --b + ++b is " + y + "<br />");
// z = y + b--;
// document.write("--a - --b + ++b + b-- is " + z + "<br />" + "<br />");

// document.write("a = " + a + "<br />");
// document.write("b = " + b + "<br />");
// document.write("--a - --b + ++b + b-- is " + z);

//3.
// var name = prompt("Enter your name: ");
// alert("Hi " + name + " :)");

//4.
// tableNo = +prompt("Enter a Table Number: ");
// var multiplier = 1;
// if (tableNo !== 0){
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++;
// }
// else{
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++;
// }

//4.
// var math = prompt("Enter 1st Subject: ");
// var chem = prompt("Enter 2nd Subject: ");
// var phy = prompt("Enter 3rd Subject: ");
// var math_marks = +prompt("Enter your " + math + " Marks: ");
// var chem_marks = +prompt("Enter your " + chem + " Marks: ");
// var phy_marks = +prompt("Enter your " + phy + " Marks: ");
// var totmarksPersubject = 100;
// var totalObatined = math_marks + chem_marks + phy_marks;
// var percentage = (totalObatined) * 100 / (totmarksPersubject * 3);
// alert("Obatined Marks: " + totalObatined + "\nYour Percentage is: " + percentage + " %");

//------------- USER INPUT & CONDITIONAL STATEMENT --------------
//1.
// var cityName = prompt("Enter your City name: ");
// if (cityName === "Karachi"){
//     alert("Welcome to City of Lights :)")
// }

//2.
// var userGender = prompt("Enter your Gender: ");
// if (userGender == "Male"){
//     alert("Good Morning Sir :)");
// }
// if (userGender == "Female"){
//     alert("Good Morning Ma'am :)")
// }

//3.
// var signalColor = prompt("Enter a Traffic Signal Color: ");
// if (signalColor === "Red"){
//     alert("Must Stop!")
// }
// else if (signalColor === "Yellow"){
//     alert("Ready to move")
// }
// else if (signalColor === "Green"){
//     alert("Move Now :)")
// }

//4.
// var remianingFeul = +prompt("Enter your Remaining Feul: ");
// if (remianingFeul < 0.25){
//     alert("Please refill the feul in your car")
// }

//5.
//a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//b.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//e.
// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//     }
//f.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    
//6.
// document.write("<h2>" + "Mark Sheet" + "</h2>");
// var obtMarks = +prompt("Obtained Marks for Three Subjects: ");
// var totMarks = 300;
// var percentage = (obtMarks * 100) / totMarks;
// if (percentage >= 80 && percentage <= 100){
//     document.write("Total Marks: " + totMarks + "<br />");
//     document.write("Marks Obtained: " + obtMarks + "<br />");
//     document.write("Percentage: " + percentage + "%" + "<br />");
//     document.write("Your Grade is A-One" + "<br />");
//     document.write("Remarks: Exellent :)")
// }
// else if (percentage >= 70 && percentage < 80){
//     document.write("Total Marks: " + totMarks + "<br />");
//     document.write("Marks Obtained: " + obtMarks + "<br />");
//     document.write("Percentage: " + percentage + "%" + "<br />");
//     document.write("Your Grade is A" + "<br />");
//     document.write("Remarks: Good :)")
// }
// else if (percentage >= 60 && percentage < 70){
//     document.write("Total Marks: " + totMarks + "<br />");
//     document.write("Marks Obtained: " + obtMarks + "<br />");
//     document.write("Percentage: " + percentage + "%" + "<br />");
//     document.write("Your Grade is B" + "<br />");
//     document.write("Remarks: You Need to Improve :(")
// }
// else if (percentage >= 0 && percentage < 60){
//     document.write("Total Marks: " + totMarks + "<br />");
//     document.write("Marks Obtained: " + obtMarks + "<br />");
//     document.write("Percentage: " + percentage + "%" + "<br />");
//     document.write("Your Grade is F" + "<br />");
//     document.write("Remarks: Sorry :(")
// }
// else{
//     alert("Please enter a correct obatined marks!")
// }

//7.
// var secretNumber = 4;
// var userNumber = +prompt("Guess the Secret Number: ");
// if (userNumber == secretNumber){
//     alert("Bingo! Correct Answer");
// }
// if (userNumber == secretNumber + 1){
//     alert("Close enough to the correct answer")
// }

//8.
// var num = +prompt("Enter a Number: ");
// if (num % 3 == 0){
//     alert("Your Number is divisile by 3")
// }

//9.
// var num = +prompt("Enter a Number: ");
// if (num % 2 == 0){
//     alert("Number is Even")
// }
// else{
//     alert("Number is Odd")
// }

//10.
// var temp = +prompt("Enter a Temperture: ");
// if (temp >= 40 && temp <= 60){
//     alert("It is too hot outside");
// }
// else if (temp >= 30 && temp < 40){
//     alert("Today's Wheather is Normal");
// }
// else if (temp >= 20 && temp < 30){
//     alert("It is Cool today");
// }
// else if (temp >= 10 && temp < 20){
//     alert("OMG! Today’s weather is so Cool");
// }
// else{
//      alert("Incorrect Temperture")
// }

//11.
// var fn = +prompt("First Number: ");
// var sn = +prompt("Second Number: ");
// var operator = prompt("Enter a Operator: ");
// if (operator == "+"){
//     alert("Answer: " + (fn + sn));
// }
// else if (operator == "-"){
//     alert("Answer: " + (fn - sn));
// } 
// else if (operator == "*"){
//     alert("Answer: " + (fn * sn));
// }
// else if (operator == "/"){
//     alert("Answer: " + (fn / sn));
// }
// else if (operator == "%"){
//     alert("Answer: " + (fn % sn));
// }
// else{
//     alert("Invalid Operator")
// }

//--------IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS--------
//1.
// var userChar = prompt("Enter a Char: ");
// if (userChar.charCodeAt(0) >= 62 && userChar.charCodeAt(0) <= 90){
//     alert("The Given Char are in UPPER CASE")
// }
// else if (userChar.charCodeAt(0) >= 97 && userChar.charCodeAt(0) <= 122){
//     alert("The Given Char are in lower case")
// }
// else if(+userChar >= 0 && +userChar <= 9){
//     alert("The Given Char is a Number")
// }
// else{
//     alert("Other Character....")
// }

//2.
// var firstInt = +prompt("Enter 1st Integer: ");
// var SecondInt = +prompt("Enter 2nd Integer: ");
// if (firstInt === SecondInt){
//     alert("The Given Two Integers are EQUAL")
// }
// else if (firstInt > SecondInt){
//     alert(firstInt + " is Greater than " + SecondInt);
// }
// else{
//     alert(SecondInt + " is Greater than " + firstInt);
// }

//3.
// var num = +prompt("Input a Number: ");
// if (num > 0){
//     alert("Your Given Number is POSITIVE");
// }
// else if (num < 0){
//     alert("Your Given Number is neagtive");
// }
// else{
//     alert("Your Number is equals to Zero")
// }

//4.
// var c = prompt("Input an Alphabetic Character: ");
// if (c == "a" || c == "A" || c == "e" || c == "E" || c == "i" || c == "I" || c == "o" || c == "O" || c == "u" || c == "U"){
//     alert("True, This is a Vowel");
// }
// else{
//     alert("False, This is a Consonent");
// }

//5.
// var correctPassword = "admin123";
// var userPassword = prompt("Enter your Password: ");
// if (userPassword === ""){
//     alert("Please enter your password.");
// }
// else if (userPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect Password");
// }

//6.
// var greeting;
// var hour = 18;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else{
//     greeting = "Good evening";
//     alert(greeting);
// }

//7.
// var time = +prompt("Enter time in that format; 1900 = 7pm: ");
// if (time >= 0000 && time < 1200){
//     alert("Good Morning");
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100){
//     alert("Good Evening");
// }
// else if (time >= 2100 && time <= 2359){
//     alert("Good Night");
// }
// else{
//     alert("Please enter a Correct time!")
// }

//------------------ Array ----------------------
//1.
// var empty_arr = [];

//2.

//3.
// var string_arr = ['UOK-DCS-UBIT', 'FAST', 'NED', 'UIT', 'HU'];

//4.
// var number_arr = [2, 5, 3, 7, 9, 22, 11, 85, 90];
// console.log(number_arr);

//5.
// var bool_arr = [true, false, false, true, false];
// console.log(bool_arr);

//6.
// var mixed_arr = ['Apple', true, 70.807, "Lamp", 6565];

//7.
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<h2>" + "Qualificattions:  " + "</h2>"); 
// document.write("1) " + qualification[0] + "<br />");
// document.write("2) " + qualification[1] + "<br />");
// document.write("3) " + qualification[2] + "<br />");
// document.write("4) " + qualification[3] + "<br />");
// document.write("5) " + qualification[4] + "<br />");
// document.write("6) " + qualification[5] + "<br />");
// document.write("7) " + qualification[6] + "<br />");
// document.write("8) " + qualification[7] + "<br />");

//8.
// var stdName = ["Shakeeb", "Saif Ullah", "Areeb"];
// var stdScore = [480, 220, 340];
// document.write("Score of " + stdName[0] + " is " + stdScore[0] + ". Percentage: " + (stdScore[0]*100)/500 + "%<br />");
// document.write("Score of " + stdName[1] + " is " + stdScore[1] + ". Percentage: " + (stdScore[1]*100)/500 + "%<br />");
// document.write("Score of " + stdName[2] + " is " + stdScore[2] + ". Percentage: " + (stdScore[2]*100)/500 + "%<br />");

//9.
// var colors_name = ['Red', 'Green', 'Yellow', 'Orange', 'Pink'];
// console.log(colors_name);
//a.
// var addBeginningColor = prompt("Enter a Color to Add at the Beginning: ");
// colors_name.unshift(addBeginningColor);
// console.log(colors_name);
//b.
// var addEndColor = prompt("Enter a Color to Add at the End: ");
// colors_name.push(addEndColor);
// console.log(colors_name);
//c.
// var addBeginningColor_1 = prompt("Enter a first Color to Add at the Beginning: ");
// var addBeginningColor_2 = prompt("Enter a second Color to Add at the Beginning: ");
// colors_name.unshift(addBeginningColor_1, addBeginningColor_2);
// console.log(colors_name);
//d.
// colors_name.shift();
// console.log(colors_name);
//e.
// colors_name.pop();
// console.log(colors_name);
//f.
// var addColorBetween = +prompt("Enter an Index to add Color on that position: ");
// var addColor = prompt("Enter a Color to Add on " + addColorBetween + " Index: ");
// colors_name.splice(addColorBetween, 0, addColor);
// console.log(colors_name);
//g.
// var deleteIndex = +prompt("From what index do you want to delete the color(s): ");
// var noOfdeletion = +prompt("How many Color(s) do you want to delete? ");
// colors_name.splice(deleteIndex, noOfdeletion);
// console.log(colors_name);

//10.
// var stdScore = [90, 66, 51, 68, 99, 78, 80, 83, 55, 50];
// console.log(stdScore);
// console.log(stdScore.sort());

//11.
// var citiesName = ['karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Multan'];
// document.write("<h4>" + "Cities List: " + "</h4>" + citiesName);
// var selectedCities = citiesName.slice(1,4);
// document.write("<h4>" + "Selected Cities List: " + "</h4>" + selectedCities);

//12.
// var arr = ["This ", "is ", "my ", "Cat"];
// document.write("<b>" + "Array: " + "</b>" + arr + "<br />");
// document.write("<b>" + "String: " + "</b>" + arr.join(" "));

//13.
// var devices = ['Juicer', 'Blender', 'Drill', 'Grander', 'bedder'];
// document.write("<b>" + "Devices: " + "</b>" + devices + "<br />");
// document.write("<b>" + "Out: " + "</b>" + "<br />");
// document.write(devices[0] + "<br />"); 
// document.write(devices[1] + "<br />"); 
// document.write(devices[2] + "<br />"); 
// document.write(devices[3] + "<br />"); 
// document.write(devices[4]); 

//14.
// var devices = ['Juicer', 'Blender', 'Drill', 'Grander', 'bedder'];
// document.write("<b>" + "Devices: " + "</b>" + devices + "<br />");
// document.write("<b>" + "Out: " + "</b>" + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");

//15.
// var phoneManufacture = ['Apple', 'Sumsung', 'Motrolla', 'Hawaei', 'OPPO']
// document.write("<select>" + "<option>" + "Select" + "</option>" + "<option>" + phoneManufacture[0] + "</option>" + "<option>" + phoneManufacture[1] + "</option>" + "<option>" + phoneManufacture[2] + "</option>" + "<option>" + phoneManufacture[3] + "</option>" + "<option>" + phoneManufacture[4] + "</option>" + "</select>")

//--------------- Arrays & Loop ------------------
//1.

//2.

//3.
// for (var i = 1; i <= 10; i++){
//     document.write(i + "<br />");
// }

//4.
// var tableNo = +prompt("Enter a Number to show its Multiplication Table: ");
// var len = +prompt("Enter a Length of Multiplication Table: ")
// for (var i = 1; i <= len; i++) {
//     document.write(tableNo + " x " + i + " = " + tableNo*i + "<br />");
// }

//5.
// var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Stawberry'];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br />");
// }
// document.write("<br />");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br />");
// }

//6.
//a.
// document.write("<h2>" + "Counting:" + "</h2>");
// for (var i = 1; i < 16; i++) {
//     document.write(i + ", ");
// }
// //b.
// document.write("<h2>" + "Reverse Counting:" + "</h2>");
// for (var i = 10; i > 0; i--) {
//     document.write(i + ", ");
// }
// //c.
// document.write("<h2>" + "Even:" + "</h2>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// //d.
// document.write("<h2>" + "Odd:" + "</h2>");
// for (var i = 1; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// //e.
// document.write("<h2>" + "Series:" + "</h2>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

//7.
// document.write("<h2>" + "XYZ Bakery" + "</h2>")
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br />");
// }
// var item = prompt("Welcome to XYZ Bakery\nWhat do you want to order Sir/Ma'am?");
// var alarm = false;
// for (var i = 0; i < A.length; i++) {
//     if (item === A[i]) {
//         alarm = true;
//         alert(item + " is available at index " + i + " in our bakery.")
//     }
// }
// if (alarm === false) {
//     alert("We are Sorry. " + item + " is not available in our bakery.")
// }

//8.
// document.write("<h3>" + "Array Items: " + "</h3>");
// var A = [31, 2020, 56, 99, 109, 34, 22, 667];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + " ");
// }
// document.write("<br />")
// var largest = A[0];
// for (var i = 0; i < A.length; i++) {
//     if (largest < A[i]) {
//         largest = A[i];
//     }
// }
// document.write("Largest no From the Array is " + largest);

//9.
// document.write("<h3>" + "Array Items: " + "</h3>");
// var A = [31, 56, 99, 21, 109, 34, 667];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + " ");
// }
// document.write("<br />")
// var samllest = A[0];
// for (var i = 0; i < A.length; i++) {
//     if (A[i] < samllest) {
//         samllest = A[i];
//     }
// }
// document.write("Smallest no From the Array is " + samllest);

//10.
// for (var i = 0; i <= 100; i += 5) {
//     if (i > 0) {
//         document.write(i + " ");
//     }
// } 