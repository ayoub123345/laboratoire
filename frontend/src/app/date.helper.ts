import { DatePipe } from '@angular/common';

export  function formatDate(date: any , time? : boolean): string {

    const dateObject = new Date(date);
    if (isNaN(dateObject.getTime())) {
        // Invalid date string, return the original string or handle the error
        return date;
    }

    const datePipe = new DatePipe('en-US');

    if(time == true)
    {
        return <string>datePipe.transform(dateObject, 'dd/MM/yyyy HH:mm:ss');

    }else
    {
        return <string>datePipe.transform(dateObject, 'dd/MM/yyyy');

    }
}