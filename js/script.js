//window.alert("hello google");
function clock(){
    let date = new Date();
    console.log(date);
    let i = date.toLocaleTimeString('en-US',{
        timeZone:'Asia/Kolkata'
    })
    let c = date.toLocaleTimeString('en-US',{
        timeZone:'Asia/Shanghai'
    })
    let a = date.toLocaleTimeString('en-Us',{
        timeZone:'America/Los_Angeles'
    })
    let k = date.toLocaleTimeString('en-Us',{
        timeZone:'Asia/Baghdad'
    })

    document.getElementById("ind").innerHTML=i;
    document.getElementById("chi").innerHTML=c;
    document.getElementById("ame").innerHTML=a;
    document.getElementById("I").innerHTML=k;

    console.log(i,c,a);
}
clock();
setInterval(clock,1000);


//'Asia/Shanghai'