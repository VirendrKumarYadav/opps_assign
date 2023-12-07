// map

Array.prototype.derivedMap = function(callback){
    let newArray = [];
    let x = this.length;
    for(let i=0; i<x; i++){
        let counter = callback(this[i],i,this);
        newArray.push(counter);
    }
    return newArray;
}

let data=[2,3,4,5,3,3];
let d=data.derivedMap((num,i,arr)=>{
    return num+num;
  })
console.log(d);

// filter
Array.prototype.myFilter = function(callback){
    let newArray = [];
    let x = this.length;
    for(let i=0; i<x; i++){
        let counter = callback(this[i],i,this);
        if(counter){
            newArray.push(this[i]);
        }
     
    }
    return newArray;
}
let num=data.myFilter((num,i,arr)=>{
    return num>3;
  })

console.log(num);
// Reduce

Array.prototype.myReduce = function(callback){
    let counter ;
    let x = this.length;
    for(let i=0; i<x; i++){
         counter =+ callback(this[i],i,this);
     
    }
    return counter;
}

let reduce=data.myReduce(function(total,num){
 return total+num;
},2);

console.log(reduce);
