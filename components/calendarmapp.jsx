import React from 'react';
import { render } from "react-dom";
import Calendar from "react-calendar";

const CalendarMappage = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
        <div>
            <Calendar onChange={this.onChange} value={this.state.date} />
        </div>
    );
};

render(<ReactCalendar />, document.querySelector("#root"));
 
export default CalendarMappPage;