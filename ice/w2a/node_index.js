console.log('hello world');
var x = [1];

function scopeDemo(x1) {
    console.log(x1);
    console.log(x);
    let a = 3, b = 4, c = 5;
    x1[0] = 100;
    console.log(a);
    console.log(b);
    console.log(c);
    if(true) {
        var x = 100;
    }
}

scopeDemo(x);
console.log(x);

var a = [1,2,3,4];
console.log(a[1]);
