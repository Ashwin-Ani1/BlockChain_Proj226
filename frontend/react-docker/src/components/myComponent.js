import React, { useState, useEffect } from 'react';

export default function MyComponent(props){
    const [data, setData] = useState(null);
    let start=null;
    let end=null;

    start=props.starttime;
    let yyyy = start.getFullYear();
    let mm = String(start.getMonth() + 1).padStart(2, '0'); //January is 0!
    let dd = String(start.getDate()).padStart(2, '0');
    start=yyyy + '-' + mm + '-' + dd;
    console.log(start);


    end=props.endtime;
    yyyy = end.getFullYear();
    mm = String(end.getMonth() + 1).padStart(2, '0'); //January is 0!
    dd = String(end.getDate()).padStart(2, '0');
    end=yyyy + '-' + mm + '-' + dd;
    console.log(end);

     useEffect(() => {

     fetch("http://localhost/api/read.php?format=geojson&starttime="+start+"&endtime="+ end +"&minmagnitude=5")
            .then(response => response.json())
            .then(data => setData(data));

    },  [props.starttime, props.endtime]);
    console.log(data);
    // render the component using the data from the API
    let print='Earthquakes from '+start+' to '+end+' with a minimum magnitude of 5';
    if(data==null){
        return <div>{print} {data}</div>;
    }
    else {
        let element=[]
        for (let i = 0; i < data.features.length; i++) {
            element[i]= <div>{data.features[i].properties.title}</div>;
        }
        return (
            <>
                {print}
                {element}
            </>
        );
    }


}


