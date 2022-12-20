import './App.css';
import MyComponent from "./components/myComponent";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import InputNumber from 'react-input-number';
import "react-datepicker/dist/react-datepicker.css";
import CheckboxList from "./components/EmergencyKit";

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
            <p style={{color: 'white', fontWeight: 'bold'}}>
                <MyComponent starttime={startDate} endtime={endDate} minMagnitude={minMagnitude}/>
            </p>
            <p style={{color: 'white'}}>
                Visit the <a href="https://www.cdc.gov/disasters/earthquakes/during.html#print">CDC website</a> for more information on what to do in the event of an earthquake.
            </p>
            <h2 style={{textDecoration: 'underline'}}>BUILDING AN EMERGENCY PREPAREDNESS KIT</h2>
            <p>
                Being prepared means being equipped with the proper supplies you may need in the event of an emergency or disaster. Keep your supplies in an easy-to-carry emergency preparedness kit that you can use at home or take with you in case you must evacuate. At a minimum, you should have the basic supplies listed below:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CheckboxList />
            </div>

        </div>
    );
}

export default App;
