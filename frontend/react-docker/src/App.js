import './App.css';
import MyComponent from "./components/myComponent";
import React, {useId, useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [start, setStart]=useState();
    const [end, setEnd]=useState();

    function changeStart(startDate) {
        let yyyy = startDate.getFullYear();
        let mm = String(startDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let dd = String(startDate.getDate()).padStart(2, '0');

        setStart(yyyy + '-' + mm + '-' + dd);
    }
    function changeEnd(endDate) {
        let yyyy = endDate.getFullYear();
        let mm = String(endDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let dd = String(endDate.getDate()).padStart(2, '0');

        setEnd(yyyy + '-' + mm + '-' + dd);
    }
    return (
        <div className="App">


            <h1>Earthquake Awareness</h1>
            <p>Please choose a start date:</p>
            <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date: Date) => setStartDate(date)}/>
            <changeStart startDate={startDate} />
            <p>Please choose an end date:</p>
            <DatePicker dateFormat="yyyy-MM-dd" selected={endDate} onChange={(date: Date) => setEndDate(date)}/>
            <changeEnd endDate={endDate} />
            <MyComponent starttime={start} endtime={end} />



        </div>
    );
}

export default App;