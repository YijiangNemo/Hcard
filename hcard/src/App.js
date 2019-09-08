import React from 'react';
import Hcard from './Hcard/Hcard'
import Preview from './Preview/Preview'
import './App.css';

function App() {

  const initialState = {firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        house:'',
                        street:'',
                        suburb:'',
                        state:'',
                        postcode:'',
                        country:'',
                        avator:''}
  const View=[{title:'PERSONAL DETAILS',
               form:[
                        [
                            {name:'firstName',textLabel:'GIVEN NAME',type:'text',required:true},
                            {name:'email',textLabel:'EMAIL',type:'email',required:true}
                        ],
                        [
                            {name:'lastName',textLabel:'SURNAME',type:'text',required:true},
                            {name:'phone',textLabel:'PHONE',type:'number',required:true}
                        ]
                    ]
                },
               {title:'ADDRESS',
               form:[
                        [
                            {name:'house',textLabel:'HOUSE NAME OR #',type:'text',required:false},
                            {name:'suburb',textLabel:'SUBURB',type:'text',required:false},
                            {name:'postcode',textLabel:'POSTCODE',type:'number',required:false},

                        ],
                        [
                            {name:'street',textLabel:'STREET',type:'text',required:false},
                            {name:'state',textLabel:'STATE',type:'text',required:false},
                            {name:'country',textLabel:'COUNTRY',type:'text',required:false},
                        ]
                    ]
               }]
  const [values, setValues] = React.useState(initialState);
  return (
    <div className="container">
        <div className={'hcard-builder'}>
             <Hcard getValues={(data)=>{ setValues(data)}} View={View} initialState={initialState}/>
        </div>
        <div className={'hcard-preview'}>
           <Preview data={values}/>
        </div>

    </div>
  );
}

export default App;
