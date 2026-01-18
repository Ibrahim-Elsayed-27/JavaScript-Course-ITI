var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//test that every element in the given array is a string
var check_string = fruits.every((e) =>{
    return isNaN(e);
})

console.log(check_string);

//test that some of array elements starts with "a"

var some_starts_with_a = fruits.some((e) =>{
    return e.startsWith('a');
})

console.log(some_starts_with_a);

// generate new array filtered from the given array with only elements that starts with "b" or "s"

var starts_with_b_or_s = fruits.filter((e) => {
    return e.startsWith('b') || e.startsWith('s');
})

console.log(starts_with_b_or_s);


//d. generate new array each element of the new array contains a string declaring that you like the give fruit element

var like_array = fruits.map((e) => {
    return `I like the fruit: ${e}`;
})

console.log(like_array);