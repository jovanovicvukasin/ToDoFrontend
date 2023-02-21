import {Button} from '@material-ui/core';
import { useState } from 'react';
import itemService from '../service/itemService';


export default function Item({item, reloadItems}) {

    const isActive = item.active === false ? 'complited' : '';

    const [isHover, setIsHover] = useState(false);

    async function handleDelete() {
        await itemService.delete(item.id);
        reloadItems();
    }

    async function handleActive() {
        await itemService.edit(item.id);
        reloadItems();
    }

    const textStyle = {
        textAlign: 'left',
        flexGrow: '1',
        marginLeft: '10px',
        cursor: isActive ? 'auto' : 'pointer',
        color: isHover ? '#7CFC00' : '#000000'
    };

    const handleMouseEnter = () => {
        if(isActive){
            setIsHover(false)
        }else{
            setIsHover(true)
        }
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
            <div style={{display:"flex",marginBottom:"10px"}}>
                <p onClick={handleActive} style={textStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{item.text}</p>
                <p style={{color:"#7CFC00",marginRight:"10px"}}>{isActive}</p>
                <Button onClick={handleDelete} variant='outlined' color="secondary" style={{marginRight:"10px"}}>X</Button>
            </div>
    );
}