import { Grid, List, ListItem, ListItemText } from "@mui/material"
import React from "react";
import { makeStyles } from '@mui/styles';
const Summary = (props) => {
    const useStyles = makeStyles({
        borderContainer: {
            border: "1px solid grey",
            borderRadius: "1%",


        },

    });
    const classes = useStyles()
    return (
        <>
            <Grid item xs={12} md={6} className={`${classes.borderContainer}`}>
                {props?.arr.map((item) => {
                    return (<>
                        <List >

                            <ListItem>
                                <ListItemText
                                    primary={`${Object.keys(item)?.[0]}: ${(item[Object.keys(item)]?.toString())} `}
                                />

                            </ListItem>

                        </List>
                    </>)
                })}

            </Grid>
        </>
    )
}

export default Summary