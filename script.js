const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){

    let dateEnd = new Date(document.getElementById("dateEnd").value);
    let dateStart = new Date(document.getElementById("dateStart").value);
    let birthMonth,birthDate,birthYear;
    let birthDetails={
        date:dateStart.getDate(),
        month:dateStart.getMonth()+1,
        year:dateStart.getFullYear()
    }
    let currentDetails={
        date:dateEnd.getDate(),
        month:dateEnd.getMonth()+1,
        year:dateEnd.getFullYear()
    }

    leapChecker(currentDetails.year);


    if(
        birthDetails.year > currentDetails.year ||
        ( birthDetails.month > currentDetails.month && birthDetails.year == currentDetails.year) || 
        (birthDetails.date > currentDetails.date && birthDetails.month == currentDetails.month && birthDetails.year == currentDetails.year)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    birthYear=currentDetails.year-birthDetails.year;


    if(currentDetails.month>=birthDetails.month){
        birthMonth=currentDetails.month-birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth=12+currentDetails.month-birthDetails.month;
    }


    
    if(currentDetails.date >= birthDetails.date){
        birthDate = currentDetails.date - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentDetails.month - 2];
        birthDate = days + currentDetails.date - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear);

}


   function displayResult(bDate,bMonth,bYear){
    document.getElementById("showYears").textContent = bYear;
    document.getElementById("showMonths").textContent = bMonth;
    document.getElementById("showDays").textContent = bDate;
}
   

    function leapChecker(year){
        if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
            months[1] = 29;
        }
        else{
            months[1] = 28;
        }
    }




