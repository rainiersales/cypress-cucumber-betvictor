class DateGenerator {
    static randomDate(start, end) {
        let calculatedDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        let month = calculatedDate.getUTCMonth() + 1; //months from 1-12
        let day = calculatedDate.getUTCDate();
        let year = calculatedDate.getUTCFullYear();
        let dateResult = '';

        if (month < 10) {
            dateResult = year.toString() + '0' + month.toString();
        } else {
            dateResult = year.toString() + month.toString();
        }
        if (day < 10) {
            dateResult += '0' + day.toString();
        } else {
            dateResult += day.toString();
        }
        return dateResult;
    }
}

export default DateGenerator;
