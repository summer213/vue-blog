let util = {

}
util.timeFormat = function(time, fmt, type){
    console.log(time);
    time = new Date(time);
    let year = time.getFullYear();
    let mouth = time.getMonth()+1;
    let day = time.getDate();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let sec = time.getSeconds();
    mouth<10&&(mouth='0'+mouth);
    day<10&&(day='0'+day);
    hour<10&&(hour='0'+hour);
    minutes<10&&(minutes='0'+minutes);
    sec<10&&(sec='0'+sec);

    // 是否需要返回时分秒
    if(!type) {
        return `${year}${fmt}${mouth}${fmt}${day} ${hour}:${minutes}:${sec}`
    } else {
        return `${year}${fmt}${mouth}${fmt}${day}`
    }
}

export default util;