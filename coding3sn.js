function splitNames(namesString, separator) {
    return namesString.split(separator);
  }
  
  let names = "John,Doe,Jane,Smith";
  let separator = ",";
  let namesArray = splitNames(names, separator);
  console.log(namesArray);
  