function plus() {
    var s = 0;
    for(let val of arguments){
        s += val;
    }
    return s;
}
console.log(plus(3,5));