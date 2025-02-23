
let groceryList = [
    "bananas",
    "grapes",
    "kiwi",
    "kale",
    "onions",
    "spinach",
    "peppers",
    "chocolate",
    "granola",
    "coconut milk",
    "juice",
  ];
  
  // First, check the above array to see if it is an array using the static method
c
  
  // 1
  // Create a NEW array with the name "fruitList" that contains the first 3 elements in groceryList without changing the groceryList array. Print both fruitList and groceryList to the console.
  
  let fruitList = groceryList.slice(0,3);
  console.log(fruitList);
  console.log(groceryList);
  
  // 2
  // Create a NEW array with the name "veggieList" that contains the 4th - 7th elements in groceryList without changing the groceryList array. Print both veggieList and groceryList to the console.
     
  let veggieList = groceryList.slice(3,7);
  console.log(veggieList);
  console.log(groceryList);


  // 3
  // Create a NEW array with the name "snacksList" that contains the 8th & 9th elements ("chocolate" & "granola") in groceryList without changing the groceryList array. Print both snacksList and groceryList to the console.
  
  let snacksList = groceryList.slice(7,9);
  console.log(snacksList);
  console.log(groceryList);

  // 4
  // Create a NEW array with the name drinksList that contains the last two elements in groceryList array without changing the groceryList array. Console.log both drinksList and groceryList.
    
  let drinksList = groceryList.slice(9,10);
  console.log(drinksList);
  console.log(groceryList);


  // 5
  // Check if some of the items in the groceryList array starts with letter "a"

let startsLettera = groceryList.filter((item) => item.startsWith("A"));
  
  // Use the following array to complete the tasks using the appropriate array method.
  let schoolList = [
    "notebook",
    "pens",
    "pencils",
    "shoes",
    "jacket",
    "uniforms",
    "bookbag",
    "laptop",
  ];
  
  // First, check the above array to see if it is an array using the static method
  
  // 6
  // Insert the strings "folder" & "binder" after "pencils in the schoolList array. 
  // Print schoolList to the console to make sure they were added in the right places.

   let addTwoStrings = schoolList.splice(3,0,"folder","binder");
   console.log(schoolList);


  // 7
  // Create a NEW array called "officeList" that contains the first five elements of the newest version of the "schoolList" array. 
  // The five elements should be removed from the "schoolList" array. Print "schoolList" and "officeList" to verify your results.

  let officeList = schoolList.splice(0,5);
  console.log(schoolList);
  console.log(officeList);
  
  // 8
  // Create a NEW array called "clothesList" that contains the first three elements in the newest version of the "schoolList" array. 
  // The three elements should be removed from the "schoolList" array. Print "schoolList" and "clothesList" to the console to verify your results.
  let clothesList = schoolList.splice(3,3);
  console.log(clothesList);
  console.log(schoolList);

  // 9
  // Check if some of the items in the schoolList array ends with letter "s"
  
  let letterEends = schoolList.filter((listItem) => listIem.incldues("s"));

  // Use the following array to complete the tasks using the appropriate array method.
  let patronAges = [17, 21, 5, 85, 55, 15, 19, 9, 33, 12, 54, 42, 60, 13, 6];
  
  // First, check the above array to see if it is an array using the static method
  
  // 10
  // Check if every age in the patronAges array a positive
  
  // 11
  // Create a NEW array called "kidsDiscountAges" that contains the elements from the "patronAges" array that are 12 or under. The "patronAges" array should stay the same. Print "patronAges" and "kidsDiscountAges" to the console to verify your results.
  
  // 12
  // Find the first element from the "patronAges" array that are 12 or under.
  
  // 13
  // Create a NEW array called "seniorsDiscountAges" that contains the elements from the "patronAges" array that are 60 or over. The "patronAges" array should stay the same. Print "patronAges" and "seniorsDiscountAges" to the console to verify your results.
  
  // 14
  // Find the first element from the "patronAges" array that are 60 or over.
  
  // 15
  // Create a NEW array called "patronAgesIn2" that contains all the age elements from the patronAges array, but with 2 years added to each. The "patronAges" array should stay the same. Print patronAges and patronAgesIn2 to the console to verify your results.
  
  // 16
  // Call a method on the patronAges array that will print: `patron age: ${age}` for each element in the array to the console. For example, the first item will be "patron age: 17" because 17 is the first element in patronAges. The "patronAges" array should not be affected. Print patronAges to be sure.
  
  // 17
  // Find the average age in the patronsAge array. Do this by adding all the ages together and then dividing by the number of elements in the array. (Hint: Do not use loops);
  
  // 18
  // Sort the patronAges from lowest to highest
  
  // 19
  // Sort the patronAges from highest to lowest
  
  // 20
  // Revers the patronAges