const recentDate = new Date();
const currentDate = recentDate.getDay();
// console.log(daysWithDates)
let dayOfTheWeek;

switch(currentDate){
    case 0:
    dayOfTheWeek="Sunday";
    quote = "you should be in Church"
    
    break;

    case 1:
    dayOfTheWeek ="Monday";
    quote =" be dressed for Job"
    break;

    case 2:
    dayOfTheWeek ="Tuesday";
    quote= "it is another day to be the best at your job"
    break;

    case 3: 
    dayOfTheWeek ="Wenesday";
    quote = "go out and win as usual"
    break;

    case 4: 
    dayOfTheWeek="Thurday"
    quote= "Walla! it is almost weekend"
    break;

    case 5:
    dayOfTheWeek ="Friday"
    quote=" yeh! it is time to Party"
    break;

    case 6:
    dayOfTheWeek = "saturday"
    Quote ="it is time to party Harder"
    break;
    

}

const header = document.querySelector(".header")
header.innerText=dayOfTheWeek
header.style.color="red"
const newtext= document.querySelector(".quote").innerText = quote

