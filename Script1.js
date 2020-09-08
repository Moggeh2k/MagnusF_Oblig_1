function hasValidLength(text) {                                                 //Teksten må ha lengde 10.
    return text.length === 10;
}

function hasValidPunctuation(text) {
    return text.charAt(2) === '.' && text.charAt(5) === '.';                    //Det må være punktum i tredje posisjon og i sjette posisjon.
}

function hasValidYear(year) {
    return year.length === 4 && year >= '0000' && year <= '9999';                //År er 0000 eller større.Kan sjekkes med year.length === 4 && year >= '0000' && year <= '9999'
}

function hasValidMonth(month) {
    return month.length === 2 && month >= '01' && month <= '12';                 //Måned er fra og med 01 til og med 12. Kan sjekkes som over.
}

function hasValidDay(month, day, year) {
    let maxDay = '30';                                                           //30 er lov for alle måneder utenom februar
    if (month === '02') {                                                                                                                                                   
        maxDay = isLeapYear(year) ? '29' : '28';                                 //Turnery Operator          
      
    }
    else if (['01', '03', '05', '07', '08', '10', '12'].includes(month)) {       //31 er lovlig for januar, mars, mai, juli, august, oktober og desember
        maxDay = '31';
    }
    return day <= maxDay
}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function isDateValid(date) {
    const dateArray = date.split('.')
    const day = dateArray[0];
    const month = dateArray[1];
    const year = dateArray[2];

    return (
        hasValidLength(date) &&
        hasValidPunctuation(date) &&
        hasValidYear(year) &&
        hasValidMonth(month) &&
        hasValidDay(month, day, year)
    );
}