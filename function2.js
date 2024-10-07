let data_array = [{ id: '42', name: "Bruce", occupation: "Knight", age: '41' },
                    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
                    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
                    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
                    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }]

//------------------------------------------
// Sort the array by age.

function sortByAge(arr1){

 

    let ascending_order = arr1.sort((a, b) => Number(a.age) - Number(b.age))
    return ascending_order
    
}

data_array = sortByAge(data_array)
console.log(`\n Sorting array by age`)
// console.log(sortByAge(data_array))
console.log(data_array)


//--------------------------------------------------------------------------------

// Filter the array to remove entries with an age greater than 50.

function update_array (arr2)
{
    const result = arr2.filter((a) => a.age < 50)
    return result
}

data_array = update_array(data_array)
// console.log(update_array(data_array))
console.log(`\n Filter the array to remove entries with an age greater than 50.`)
console.log(data_array)


//-----------------------------------------------------------------------------------------------

// Map the array to change the “occupation” key to “job” and increment every age by 1.


function changeKey (arr3) {

    // const newArrayOfObj = arr3.map(({key3: job, ...rest}) => ({job, ...rest}));
    //   console.log(newArrayOfObj);

    arr3.forEach((object) => {
        object.job = object.occupation
        delete object.occupation;
        object.age= Number(object.age) + 1    
          })

      return arr3
}

data_array = changeKey(data_array)
console.log(`\n Change the “occupation” key to “job” and increment every age by 1.`)
console.log(data_array)



//------------------------------------------------------------------------------------------------------------


// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.


function average_age(arr){

    const sum = arr.reduce((accumulator, current) => accumulator + Number(current.age), 0)
    return avg = Math.floor(sum/arr.length)
}

console.log(`\n Calculating the Average of ages.`)
console.log(average_age(data_array))