import React, { useState, useEffect } from 'react';

export default function MyComponent(props){
    const [data, setData] = useState(null);

    console.log(props.starttime);

     useEffect((props) => {
     fetch("http://localhost/api/read.php?format=geojson&starttime="+props.starttime+"&endtime="+ props.endtime)
            .then(response => response.json())
            .then(data => setData(data));

    }, []);
    console.log(data);
    // render the component using the data from the API
    return <div>{JSON.stringify(data)}</div>;

}


