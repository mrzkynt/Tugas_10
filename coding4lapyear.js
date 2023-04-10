function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }
  
  let year = 2023;
  if (isLeapYear(year)) {
    console.log(year + " adalah tahun kabisat.");
  } else {
    console.log(year + " bukan tahun kabisat.");
  }
  