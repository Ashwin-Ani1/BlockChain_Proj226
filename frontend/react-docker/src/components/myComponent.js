import React, { useState, useEffect } from 'react';

export default function MyComponent(props){
    const [data, setData] = useState(null);
    let start=props.starttime;
    let yyyy = start.getFullYear();
    let mm = String(start.getMonth() + 1).padStart(2, '0'); //January is 0!
    let dd = String(start.getDate()).padStart(2, '0');
    start=yyyy + '-' + mm + '-' + dd;
    console.log(start);


    let end = props.endtime;
    yyyy = endDate.getFullYear();
    mm = String(endDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    dd = String(endDate.getDate()).padStart(2, '0');
    end=yyyy + '-' + mm + '-' + dd;
    console.log(end);

     useEffect((props) => {

     fetch("http://localhost/api/read.php?format=geojson&starttime="+props.starttime+"&endtime="+ props.endtime)
            .then(response => response.json())
            .then(data => setData(data));

    }, []);

    // render the component using the data from the API
    return <div>{JSON.stringify(data)}</div>;

}




