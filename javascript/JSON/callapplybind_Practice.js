// console.log("================= Call Apply Bind ==================");


// let shahroze={
//     ename:"Shahroze",
//     eid:876,
//     salary:80000,
//     newSal:function(bonus,inc) {
//         // return this.salary+bonus+inc;
//         return `Dear ${this.ename},your new salary is ${bonus+inc+this.salary} <br>`;
//     }
// }

// let sonu={
//     ename:"sonu",
//     eid:987,
//     salary:60000
// }
// // ! call
// document.write(shahroze.newSal.call(sonu,10000,2000));
// // document.write(shahroze.newSal.call(sonu,10000,2000));

// document.write(shahroze.newSal.apply(sonu,[10000,2000]));
// document.write(shahroze.newSal.bind(sonu,10000,2000)());


let tasneem={
    name:"tasneem aamir",
    eid:"121",
    salary:9999,
    newSalary: function(bonus, inc){
        return `your salary is ${this.salary} and with bonus and inc your sal is ${bonus+inc+this.salary}`;
    }
}

let aamir={
    name:"aamir",
    eid:"1211",
    salary:8888,

}

console.log(tasneem.newSalary.call(aamir,1,2));
console.log(tasneem.newSalary.apply(aamir,[1,2]));
console.log(tasneem.newSalary.bind(aamir,1,2)());



function add(a,b,...c)
{
    console.log(a);
    console.log(b);
    console.log(c);

}

add(10,20,30,40,50,60);