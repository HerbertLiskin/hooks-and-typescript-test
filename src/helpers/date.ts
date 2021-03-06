export const timestampToDate = (timestamp: number) => {

    const date = new Date(timestamp);
    const aaaa = date.getUTCFullYear()

    let gg: string | number = date.getDate()
    let mm: string | number = (date.getMonth() + 1)

    if (gg < 10)
        gg = '0' + gg.toString()

    if (mm < 10)
        mm = 0 + mm.toString()

    const cur_day = aaaa + '-' + mm + '-' + gg;

    let hours: string | number = date.getHours()
    let minutes: string | number = date.getMinutes()
    let seconds: string | number = date.getSeconds()

    if (hours < 10)
        hours = '0' + hours;

    if (minutes < 10)
        minutes = '0' + minutes;

    if (seconds < 10)
        seconds = '0' + seconds;

    return cur_day + ' ' + hours + ':' + minutes + ':' + seconds;

}