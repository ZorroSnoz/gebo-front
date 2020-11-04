let dataPicker = (): string => {
    let time: any = new Date()
    let month: number | string = time.getMonth() + 1
    if (month < 10) {
        month = '0'+ month
    }
    let day: string = time.getUTCDate()
    let hours: string = time.getHours()
    let minutes: string = time.getMinutes()
    let nowTime: string = `${month}.${day} ${hours}:${minutes}`
    return nowTime
}

export default dataPicker