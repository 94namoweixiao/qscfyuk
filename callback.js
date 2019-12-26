var a = 1;
var b = 2;
function ifOK(isOk, callback){
    if(isOk){
        callback();
    }
}

function out(){
    console.log("执行了callback");
}

function add(a,b){
    var c = a + b;
    console.log(c);
    return true;
}

ifOK(add(a,b), out);
