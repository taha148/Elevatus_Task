import { Button, TextField, Toolbar } from "@mui/material"
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePage, getJobs } from "../../store/actions/jobAction";



const useStyles = makeStyles({
    root: {
        width: "75%",
        margin: "auto",
        backgroundColor: "#80808073",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginBottom: "1rem",
        display:"block !important"
    },

    searchBar: {
        "&>div": {
            backgroundColor: "white"
        }
    },
    widthImg: {
        width: "100%"
    },
    flexClass:{
      display:"flex",
      justifyContent:"space-between"
      
    }
});

const SearchBar = () => {
    const [querySearch, setQuerySearch] = useState("")
    const dispatch = useDispatch()
    const classes = useStyles();
    const handlesumbit = (e) => {
        e.preventDefault()
        dispatch(changePage())
        dispatch(getJobs({ query: querySearch }))
    }
    return (
        <Toolbar variant="dense" className={classes.root}>
            <form onSubmit={handlesumbit} className={classes.flexClass}>
                <TextField
                    className={classes.searchBar}
                    label="Job Search"
                    type="search"
                    onChange={e => setQuerySearch(e.target.value)}
                    value={querySearch}
                />

                <Button variant="contained" type='submit'>
                    search
                </Button>
            </form>
        </Toolbar>
    )
}

export default SearchBar