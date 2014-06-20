//ex01
/*
var sum = 0;
for (var i=0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0){
        sum += i;
    }
}
console.log(sum);
*/

//ex02
// function fibonacci_set(max) {
//     if (max > 1) {
//         var fib_list = [1];
//         var current_fib = 1;
//         while (current_fib < max) {
//             fib_list.push(current_fib);
//             current_fib = 
//             fib_list[fib_list.length-1] + 
//             fib_list[fib_list.length-2];
//         }
//         return fib_list;
//     }    
//     else {
//         return [1, 1];
//     }
// }

// //Even function

// function even(n) {
//     return n % 2 === 0;
// }


// function sumup (list) {
//     var sum = 0;
//     for (var i=0; i<list.length; i++ ) {
//         sum = sum + list[i];
//     }
//     return sum;
// }

// function filter(fn, l) {
//     var newlist = [];
//     for (var i=0; i < l.length; i++) {
//         var item = l[i];
//         if(fn(item) === true) {   //iseven
//             newlist.push(item);
//         }
//     }
//     return newlist;
// }


// console.log(sumup(filter(even, fibonacci_set(4000000))));


