function showtime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";
    if (h > 12) {
        h = h -12   
    }
    if (h<=12) {
        session = "PM"
    }
    var time = h + ":" + m +":" + s + " "+ session ;
    document.getElementsByTagName('h1')[0].innerText = time
    setTimeout(showtime,1000);
}