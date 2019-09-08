import React from 'react';
import TextField from '@material-ui/core/TextField';
import Error from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/core/styles';
import Button from "../Button";




const StandardTextField = React.forwardRef((props,ref) => {
    const useStyles = makeStyles(theme => ({
            textroot: {
                width:'100%',
            },
            input:{
                fontWeight:"normal",
                fontFamily:"Merriweather",
                fontSize:16,
                color:props.Error?'#B00020':'#000000',
            },
            root: {
                '& textLabel.Mui-focused': {

                },
                '& .MuiOutlinedInput-root': {

                    '& input':{
                        paddingTop:8,
                        paddingBottom:8,
                        paddingLeft:8,
                    },
                    '& fieldset': {

                        borderColor:props.Error?'#B00020':'',
                    },
                    '&:hover fieldset': {
                        borderColor:props.Error?'#B00020':'#2196F3'
                    },
                    '&.Mui-focused fieldset': {
                        borderColor:props.Error?'#B00020':'#2196F3'
                    },
                },
            },
        }));

    const classes = useStyles();

    return(<div><p style={{fontSize:12,color:'#2c3e50',fontWeight:400,fontFamily:"Merriweather Sans",margin:0}}>{props.textLabel}</p>

                <TextField
                    ref={ref}
                    id={props.id}
                    variant={'outlined'}
                    {...props}
                    InputProps={{endAdornment:props.Error&&<Error/>,classes:{root:classes.input}}}
                    classes={{root:classes.root}}
                    className={classes.textroot}
                />
            </div>)}
);

export default StandardTextField