import './App.css';
import MyComponent from "./components/myComponent";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import InputNumber from 'react-input-number';
import "react-datepicker/dist/react-datepicker.css";

function App() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [minMagnitude, setMinMagnitude] = useState(0);

    return (
        <div className="App">

            <h1>Earthquake Awareness</h1>
            <p>Please choose a start date:</p>
            <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date: Date) => setStartDate(date)} />

            <p>Please choose an end date:</p>
            <DatePicker dateFormat="yyyy-MM-dd" selected={endDate} onChange={(date) => setEndDate(date)} />
            <p>Please choose a minimum magnitude</p>
            <InputNumber min={0} max={10} value={minMagnitude} onChange={setMinMagnitude} />
            <p></p>
            <MyComponent starttime={startDate} endtime={endDate} minMagnitude={minMagnitude}/>

            <h2 style={{textDecoration: 'underline'}}>Preparing an Earthquake Kit:</h2>



        </div>
    );
}

export default App;
