import React from 'react';
import './Preview.css'



const Preview = (props) =>{

    return (

       <div className={'preview-container'}>
           <h4 className={'preview-title'}>HCARD PREVIEW</h4>
           <div className={'preview-header'}>
               <h3 aria-label={'name'}  className={'preview-name'}>
                   {`${props.data.firstName} ${props.data.lastName}`}
               </h3>
               <div style={{flexGrow:1}}/>
               <img className={'preview-avator'} src={props.data.avator||'/avator.png'}/>
           </div>
           <div className={'preview-info'}>
               <div className={'preview-row'}>
                   <p className={'preview-label'}>EMAIL</p>
                   <p aria-label={'email'} className={'preview-text'}>{props.data.email}</p>
               </div>
               <div className={'preview-row'}>
                   <p className={'preview-label'}>PHONE</p>
                   <p aria-label={'phone'} className={'preview-text'}>{props.data.phone}</p>
               </div>
               <div className={'preview-row'}>
                   <p className={'preview-label'}>ADDRESS</p>
                   <p className={'preview-text'}>{`${props.data.house} ${props.data.street}`}</p>
               </div>
               <div className={'preview-row'}>
                   <p className={'preview-label'}> </p>
                   <p aria-label={'address'} className={'preview-text'}>{`${props.data.suburb}${props.data.suburb&&','} ${props.data.state}`}</p>
               </div>
               <div className={'preview-row'}>
                   <div style={{flex:'50%',display:'flex'}}>
                   <p className={'preview-label'}>POSTCODE</p>
                   <p aria-label={'postcode'} className={'preview-text'}>{props.data.postcode}</p>
                   </div>
                  <div style={{flex:'50%',display:'flex'}}>
                   <p className={'preview-label'}>COUNTRY</p>
                   <p aria-label={'country'} className={'preview-text'}>{props.data.country}</p>
                   </div>
               </div>
               <br/>
           </div>

       </div>
);
}

export default Preview