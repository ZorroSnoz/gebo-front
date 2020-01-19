let dataPicker = () => {
    let time = new Date();
    let month = time.getMonth() + 1;
    if (month < 10) {
        month = '0'+ month;
    };
    let day = time.getUTCDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let nowTime = `${month}.${day} ${hours}:${minutes}`;
    return nowTime;
}

export default dataPicker;