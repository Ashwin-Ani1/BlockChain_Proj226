import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


export default function CheckboxList() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {[
                { value: 0, label: "Water: one gallon per person, per day (3-day supply for evacuation, 2-week supply for home)" },
                { value: 1, label: "Food: non-perishable, easy-to-prepare items (3-day supply for evacuation, 2-week supply for home)" },
                { value: 2, label: "Flashlight" },
                { value: 3, label: "Battery-powered or hand-crank radio" },
                { value: 4, label: "Extra batteries" },
                { value: 5, label: "First aid kit" },
                { value: 6, label: "Battery-powered or hand-crank radio" },
                { value: 7, label: "Medications (7-day supply) and medical items"},
                { value: 8, label: "Multi-purpose tool"},
                { value: 9, label: "Medications (7-day supply) and medical items"},
                { value: 10, label: "Sanitation and personal hygiene items"},
                { value: 11, label: "Copies of personal documents (medication list and pertinent medical information, proof of address, deed/lease to home, passports, birth certificates, insurance policies)"},
                { value: 12, label: "Cell phone with chargers"},
                { value: 13, label: "Family and emergency contact information"},
                { value: 14, label: "Cell phone with chargers"},
                { value: 15, label:  "Extra cash"},
                { value: 16, label: "Blankets"},
                { value: 17, label: "Map(s) of the area"}


            ].map((item) => {
                const labelId = `checkbox-list-label-${item.value}`;

                return (
                    <ListItem
                        key={item.value}
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(item.value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(item.value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}


