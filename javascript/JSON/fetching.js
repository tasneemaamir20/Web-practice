console.log("=======Fetching Data from json==================");


let jsondata=window.fetch("./jsondata.json");
console.log(jsondata);


jsondata.then((response)=>{
        response.json().then((val)=>{
                console.log(val);
            }
        )
    }
)




async function getData()
{
    let res=await fetch("./jsondata.json");
    let val= await res.json();
    console.log(val);
}

getData();