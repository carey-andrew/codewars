function isLeapYear(year) {
    // pass in parameter year and test if divisible by 4
    // if true and not divisible by 100 then leap year
    // if true but divisible by 100 then not leap year,
    // unless year is divisible by 400
    if (year % 4 === 0  && year % 100 != 0 || year % 400 === 0) {
      return true
    } else  {
      return false
    } 
    }