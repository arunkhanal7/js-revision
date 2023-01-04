const getSleepHours = (day) => {
  if (day === "sunday") {
    return 8;
  } else if (day === "monday") {
    return 6;
  } else if (day === "tuesday") {
    return 9;
  } else if (day === "wednesday") {
    return 7;
  } else if (day === "thrusday") {
    return 5;
  } else if (day === "friday") {
    return 6;
  } else if (day === "saturday") {
    return 7;
  }
};
const getActualSleepHours = () => {
  return (
    getSleepHours("sunday") +
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thrusday") +
    getSleepHours("friday") +
    getSleepHours("saturday")
  );
};
const getIdealSleepHours= ()=> {
  let idealHours=7
  return (idealHours * 7)
}
const calculateSleepDebt=()=>{
  let actualSleepHours=getActualSleepHours()
  let idealSleepHours=getIdealSleepHours()
  if (actualSleepHours===idealSleepHours){
    console.log('The user get the perfect amount of sleep')
  }
   else if(actualSleepHours>idealSleepHours){
    console.log('The user got more sleep than needed')
  }
  else if(actualSleepHours< idealSleepHours){
    console.log('The user should get some rest')
  }
}
calculateSleepDebt()
