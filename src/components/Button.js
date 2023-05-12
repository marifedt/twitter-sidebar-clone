import { Fragment, useState } from 'react';

export default function Button({name ='', iconName = ''}){
    const [icon, setIcon] = useState(iconName, true);
    let btnName = name;

    function handleClick(e) {
        e.stopPropagation();
        let iconName = icon.split(' ');
        iconName[0] = 'fa-solid';
        iconName = iconName.join(' ');
        setIcon(iconName);
    }

    return(
        <a href={name} id={'btn' + btnName}  className="btn" onClick={handleClick}>
            <i className={icon}/> 
            {/*Adds two spaces between the icon and the text*/}
            {btnName !== '' && icon !== '' ? <Fragment>&nbsp; &nbsp;</Fragment> : '' } 
            {btnName}
        </a>
    )
}