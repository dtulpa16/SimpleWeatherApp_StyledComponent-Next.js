export function formatTime(dateString:string) {
    const date = new Date(dateString);
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    hours = hours % 12;
    hours = hours ? hours : 12; 

    const formattedTime = `${hours}${ampm}`;
    return formattedTime;
  }