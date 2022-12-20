import './App.css';
import MyComponent from "./components/myComponent";
import React, {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());




    return (
        <div className="App">

            <h1>Earthquake Awareness</h1>
            <p>Please choose a start date:</p>
            <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date: Date) => setStartDate(date)} />

            <p>Please choose an end date:</p>
            <DatePicker dateFormat="yyyy-MM-dd" selected={endDate} onChange={(date: Date) => setEndDate(date)} />

            <MyComponent starttime={startDate} endtime={endDate}/>



        </div>
    );
}

export default App;
