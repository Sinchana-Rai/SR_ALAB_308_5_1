
// Sort the array by age.

let data_array = [
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
  ]

  let data_array_original = [
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
  ]

  let data_array_noage = [
    { id: '63', name: 'Blaine', occupation: 'Quiz Master'},
    { id: '7', name: 'Bilbo', occupation: 'None' }
  ]


//-------------------------------------------------------------------------------

//Take an object and increment its age field.

function passByValueFunction(arr2, str1 = '48'){
     
   arraymodifed= arr2.filter(id1 => id1.id === str1)

   let arraymodifedAge = Number(arraymodifed[0].age)
   arraymodifed[0].age = arraymodifedAge + 1
//    console.log(arraymodifed)
               
        return arraymodifed
   
    }
    console.log(`\n Passing an id and updating age for that id`)
console.log(passByValueFunction(data_array))
// passByValueFunction(data_array)



// -----------------------------
// Take an object, make a copy, and increment the age field of the copy. Return the copy.

function copyFunction(arr3)
{

    let arr4 = arr3

    for (let i=0;i<arr4.length;i++)
    {
        arr4[i].age = Number(arr4[i].age)
        arr4[i].age +=1
       
    }
    console.log(`\nCopied array`)
    console.log(arr4)
    console.log(`\n Original array`)
    console.log(arr3)

}
console.log(`\n Copying an object and incrementing the age in the copied array`)
copyFunction(data_array)



//--------------------------------------------------------------

  function addKeyValuePair(arr5){
  
    const d = new Date()

//   arr5.forEach(element => {
//     element.age = '0'
//   });

arr5.forEach(element => {
    Object.assign(element, {age : '0', updated_at : d})
});

   console.log(arr5)
  }

  console.log(`\n Adding age field and setting it to zero and adding date field and displaying current date for all objects in an array`)
  addKeyValuePair(data_array_noage)
