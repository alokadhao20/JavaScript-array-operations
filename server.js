// METHODS

//1.concat() Joins two or more arrays, and returns a copy of the joined arrays
    var hege = ["Cecilie", "Lone"];
    var stale = ["Emil", "Tobias", "Linus"];
    var array3 = ["chrome", "firefox", "IE"];
    var children = hege.concat(stale,array3);
    // O/p children=[ 'Cecilie','Lone','Emil','Tobias','Linus','chrome','firefox','IE' ]
  
 //2.indexOf() The method searches the array for the specified item, and returns its position. Returns -1 if the item is not found.
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = fruits.indexOf("Apple");
    // O/p 2  

    var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
    var a = fruits.indexOf("Apple", 4); // in this eg it will start search apple from 4th index to last index and will ignore index 0-3
    // O/p a= 6  
    
    var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
    var a = fruits.indexOf("lemon"); // Check if element is present in array or not if a=-1 thats means it is not present
    // O/p -1 

//3.lastIndexOf()  If you want to search from end to start, use the lastIndexOf() method
    var fruits = ["Apple", "Orange", "Apple", "Mango"];
    var a = fruits.lastIndexOf("Apple");  // It will start search index from last to first
    // O/p 2

    var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
    var a = fruits.lastIndexOf("Apple", 4); //Search an array for the item "Apple", starting the search at position 4
    // O/p 2

//3.join() Joins all elements of an array into a string
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var energy = fruits.join();
    //O/p Banana,Orange,Apple,Mango

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var energy = fruits.join(" and "); //Try using a different separator
    // O/p Banana and Orange and Apple and Mango

// 4. pop() Removes the last element of an array, and returns that element
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a =fruits.pop();
    // O/p a= Mango 
    //fruits = Banana,Orange,Apple

// 5. push() Adds new elements to the end of an array, and returns the new length
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a =fruits.push("Kiwi");
    // O/p a = 5
    // fruits = [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a =fruits.push("Kiwi", "Lemon", "Pineapple");
    // O/p a = 7
    // fruits = [ 'Banana','Orange','Apple','Mango','Kiwi','Lemon','Pineapple' ]
    
    
// 6. reverse() Reverses the order of the elements in an array
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = fruits.reverse();
    // O/p a=[ 'Mango', 'Apple', 'Orange', 'Banana' ]
    //fruits=[ 'Mango', 'Apple', 'Orange', 'Banana' ]
    
// 7. shift() Removes the first element of an array, and returns that element
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a =fruits.shift();
    // O/p a = Banana
    // fruits= [ 'Orange', 'Apple', 'Mango' ]
    
// 8. slice() Selects a part of an array, and returns the new array
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var a = fruits.slice(1, 3);
    //O/p a=[ 'Orange', 'Lemon' ]
    //fruits=[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
    
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var a = fruits.slice(-3, -1);  //Select elements using negative values
    //O/p a=[ 'Lemon', 'Apple' ]
    //fruits=[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
    
// 9. sort() Sorts the elements of an array
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = fruits.sort(); //if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
    //O/p a=[ 'Apple', 'Banana', 'Mango', 'Orange' ]
    //fruits=[ 'Apple', 'Banana', 'Mango', 'Orange' ]
    
    var points = [40, 100, 1, 5, 25, 10];
    var a= points.sort(function(a, b){return a-b});//Sort numbers in an array in ascending order
    // O/p a=[ 1, 5, 10, 25, 40, 100 ]
    //points= [ 1, 5, 10, 25, 40, 100 ]
    
    var points = [40, 100, 1, 5, 25, 10];
    var a= points.sort(function(a, b){return b-a}); //Sort numbers in an array in descending order
    // O/p a=[ 100, 40, 25, 10, 5, 1 ]
    //points= [ 100, 40, 25, 10, 5, 1 ]
 
// 10. highest value in an array
    var points = [40, 100, 1, 5, 25, 10]; //Get the highest value in an array
    var a= points.sort(function(a, b){return b-a}); // Sort the numbers in the array in descending order
    var highestValue= points[0]; 
    //O/p a= [ 100, 40, 25, 10, 5, 1 ]
    //points= [ 100, 40, 25, 10, 5, 1 ]
    //highestValue= 100
    
// 11. Lowest value in an array
    var points = [40, 100, 1, 5, 25, 10];
    var a= points.sort(function(a, b){return a-b});    // Sort the numbers in the array in ascending order
    var lowestValue= points[0];
    // O/p a= [ 1, 5, 10, 25, 40, 100 ]
    // points=[ 1, 5, 10, 25, 40, 100 ]
    // lowestValue= 1
    
// 12. Deleting Elements
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = delete fruits[0];           // Changes the first element in fruits to undefined
    // O/p a= true
    //fruits= [ , 'Orange', 'Apple', 'Mango' ]
    
    
// 13. Using splice() to Remove Elements
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a= fruits.splice(0, 1);        // Removes the first element of fruits
    //O/p a= [ 'Banana' ]
    // fruits= [ 'Orange', 'Apple', 'Mango' ]
    
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = fruits.splice(2, 1, "Lemon", "Kiwi"); //At position 2, add the new items, and remove 1 item    
    // O/p a= [ 'Apple' ]
    // fruits= [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]
    
 // 14. Using filters   
    Array.prototype.filter = function(fun /*, thisp*/)
    {
        var len = this.length;
        if (typeof fun != "function")
            throw new TypeError();
        var res = new Array();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++)
        {
            if (i in this)
            {
              var val = this[i]; // in case fun mutates this
              if (fun.call(thisp, val, i, this))
                res.push(val);
            }
        }
        return res;
    };

    function isBigEnough(element, index, array) {
      return (element >= 13 && element <= 129); //whatever request you give in this will be processed on array
    }
    var filtered  = [12, 5, 8, 130, 44].filter(isBigEnough);
    // O/p filtered= 44
    
