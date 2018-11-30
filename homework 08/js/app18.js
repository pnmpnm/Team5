
function fillArray (content , length) {
    let a = [];
        for (let i = 0; i < length; i++) {
        a.push(content);
    }
    return a;    
}    
console.log(fillArray('x', 10));        
