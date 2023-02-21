import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import {useEffect, useState } from 'react';
import itemService from '../service/itemService';
import Items from './Items';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function AddItems() {

    const classes = useStyles();
    const paperStyle = {padding: '30px', width:600, margin:"30px auto"};

    const [text, setText] = useState('');

    const [items, setItems] = useState([]);

    async function reloadItems() {
        const loadedItems = await itemService.getAll();
        setItems(loadedItems);
    }

    useEffect(() => {
         reloadItems().then(null);
    }, []);

    async function handleClick() {
        if (text === '') return;

        await itemService.add(text);
        setText('');
        reloadItems();
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"gray"}}>What are you going to do?</h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" value={text} onChange={(e)=>setText(e.target.value)} label="Text" variant="outlined" fullWidth/>
                    <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
                </form>
                <Paper elevation={3} style={{paddingBottom:"10px",margin:"10px"}}>
                    <Items items={items} reloadItems={reloadItems}/>
                </Paper>
            </Paper>
        </Container>
    );
}