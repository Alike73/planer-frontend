import { useEffect, useState } from "react";

const DateTime = () => {

    const [date,setDate] = useState(new Date());
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = days[date.getDay()];
    const todayDate = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const currentTime = date.toLocaleString([], {hour: '2-digit', minute:'2-digit'});
    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return (
        <div className="DateAndTimeBox py-2 text-white">
            <small> 
            <i className="bi bi-clock fs-4"></i> <i className="bi bi-caret-right-fill"></i> 
            {currentTime}
            </small>
            <small> 
            <i className="bi bi-calendar4-week fs-4"></i> <i className="bi bi-caret-right-fill"></i> 
            {day}

            <div className="d-flex justify-content-center align-items-center">
                {month} 
                <span className="todayDate ms-2">
                    {todayDate}
                </span>

                <small className="ms-2">
                    {year}
                </small>
            </div>

            </small>
        </div>
    )
}
export default DateTime;