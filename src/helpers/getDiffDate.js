
export const getDiffDate = (date1, date2) => {
    const miliseconds1 = Date.parse(date1)
    const miliseconds2 = Date.parse(date2)

    const diffInSeconds = Math.abs(miliseconds1 - miliseconds2) / 1000;
    const days=  diffInSeconds /(60*60*24);
    return Math.round(days);
}


