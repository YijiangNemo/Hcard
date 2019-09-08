import React from 'react';
import './style.css'



const DropView = (props) =>{

    return (

        <div className={'hcard-dropzone'} style={{background: '#E5E5E5',  borderRadius: 3,width: '100%', height: 209 , display:'flex',alignItems:'center'}}>
            <div  style={{margin:'auto',textAlign:'center'}}>
            <svg fill={'inherit'}  style={{margin:'auto', width:'100%',verticalAlign:'middle'}}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
                <p  style={{ fontFamily: 'Open Sans', lineHeight:1, fontStyle: 'normal', fontWeight: 'normal', fontSize: 12, margin:8}}>Drop file here</p>
            </div>
    </div>
);
}

export default DropView