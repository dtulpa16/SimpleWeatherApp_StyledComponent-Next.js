export const getDayOfWeekFromEpoch = (epochTime:number) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(epochTime * 1000); 
    const dayOfWeek = date.getDay(); 
    return daysOfWeek[dayOfWeek]; 
  };