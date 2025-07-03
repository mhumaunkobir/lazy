function evenify(num){
    if (num % 2 === 0){
       var result;
        result = num;
    }
    else{
        result = num +2;
    }
    return result;
}
var result = evenify(11);
console.log("result", result);

function oddify(num){
    var even_array = [];
    for (var i = 0; i < 10; i++){
        const nums = num + [i];
        var even = evenify(nums);
        even_array.push(even);
    }
    return even_array;
}
var nums = [2,3,4,4,3,22,3,21,211,12];
var result =  oddify(nums);
console.log("result =", result);