addressInput= [
    "Leuschnerdamm 31, 10999 Berlin",
    "Unter den Linden 10, 10178 Berlin",
    "Süthen 16 29482 Küsten",
    "Krefelder Straße 3a 10555 Berlin",
    "Bornaische Str. 33, 04277 Leipzig", 
    "4555 S Western Blvd, Chicago, IL 60609",
    "1100 Congress Ave, Austin, TX 78701"
];

for(i = 0 ; i < addressInput.length;i++){
    console.log(addressParse(addressInput[i]));
}

function addressParse(string){
    string = removeExtraSpaces(string);
    let addressArray = addressToArray(string);

    if(isUSAAddress(string[0])){
        postalcode = addressArray[addressArray.length-1]
        city = addressArray[addressArray.length-3] + " " + addressArray[addressArray.length-2];
        housenumber = addressArray[0]
        street = string.slice(housenumber.length + 1, - postalcode.length - city.length - 2)
    } else {
        postalcode = addressArray[addressArray.length-2]
        city = addressArray[addressArray.length-1]
        housenumber = addressArray[addressArray.length-3]
        street = string.slice(0,- housenumber.length - postalcode.length - city.length - 3)
    }

    return { 
        "street": street, 
        "housenumber": housenumber, 
        "postalcode": postalcode, 
        "city": city 
    }

}

function removeExtraSpaces(string){
    string = string.replaceAll(","," ");
    return string.replace(/\s+/g," ").trim();
}

function addressToArray(string){
    return dataArray = string.split(" ");
}

function isUSAAddress(string){
    return !isNaN(string[0]);
}
