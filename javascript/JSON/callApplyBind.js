console.log("======= call Apply bind  ======");



let shahroze={
    fname:"Moahmmad",
    lname:"Shahroze",
    fullname: function(){
        return this.fname+" "+ this.lname;
    }
}

console.log(shahroze.fullname());

let sonu={
    fname:"sonu",
    lname:"Rajput",
}


//! call
console.log(shahroze.fullname.call(sonu));

//! Apply
console.log(shahroze.fullname.apply(sonu));

//! bind
console.log(shahroze.fullname.bind(sonu)());
