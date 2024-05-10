
console.log("Welcome to SBI ");


function bank()
{
    var accountHolder= "Tasneem Aamir";
    var accountNum=98765432110;
    var accountBal=50000;

    function DepositBal()
    {
        var DepositBal=Number(prompt("Enter the Balance which you want to deposit"));
        
        return DepositBal+accountBal;
    }
    return DepositBal;
}

console.log(bank()());