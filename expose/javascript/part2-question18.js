function printSecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
var seconds = setInterval(printSecond,1000);

