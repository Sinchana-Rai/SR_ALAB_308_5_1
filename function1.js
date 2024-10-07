//  write functions that accomplish the following:
// 1 Take an array of numbers and return the sum.


function numArray_Add(arr)
{
    let sum = 0
    for (let i=0;i<arr.length;i++)
        sum+=arr[i];
    return sum
}

const array1 = [2, 4, 6, 8, 40]
console.log(`\n Sum of array of numbers`)
console.log(numArray_Add(array1))

// --------------------------------------------------

// 2 Take an array of numbers and return the average.

function numArray_Avg(arr)
{
    let sum = 0
    arrayLength=arr.length

    for (let i=0;i<arr.length;i++)
        sum+=arr[i];
     average=sum/arrayLength

    return average
}

const array2 = [2, 4, 6, 8]
console.log(`\n Average of array of numbers`)
console.log(numArray_Avg(array2))


//---------------------------------------------------------
// 3 Take an array of strings and return the longest string.

function longest_stringFn(arr)
{
    let longest_string = ""
   
    for (let i=0;i<arr.length;i++) 
    {
     if(arr[i].length > longest_string.length)  
        {
          
           longest_string = arr[i]
        } 
    }
    return longest_string
}

const array3 = ["red", "orange", "hiiiiiiiiiiiiii"]
console.log(`\n Longest String in an array of strings`)
console.log(longest_stringFn(array3))

//------------------------------------------------------------------------------

// 4 Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].


function givenLength_string(arr, num){

    output_array = []

    for (let i=0;i<arr.length;i++)
  {
        if(arr[i].length > num)
        {
            output_array.push(arr[i])
        }
        
  }
  return output_array

}


console.log(`\n Returning an array of the strings that are longer than the given number`)
console.log(givenLength_string(['say', 'hello', 'in', 'the', 'morning'], 3))


//---------------------------------------------------
// 5 Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function displayNumbers(n) {
    if (n <= 0) {
      return
    }
  
      console.log(n); 
      displayNumbers(n - 1)
    
  }
  
  console.log(`\n Print every number between 1 and n without using loops`)
  displayNumbers(19);

