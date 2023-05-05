import { Fragment } from "react";

export default function Button({name ='', iconName = ''}){
    let btnName = name;
    let icon = iconName;

    const handleClick = function(){
        alert( btnName + ' was clicked');
    }

    return(
        <button id={'btn' + btnName}  className="btn" onClick={handleClick}>
            <i className={icon}/> 
            {/*Adds two spaces between the icon and the text*/}
            {btnName !== '' && icon !== '' ? <Fragment>&nbsp; &nbsp;</Fragment> : '' } 
            {btnName}
        </button>
    )
}