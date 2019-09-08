import React,{Component} from 'react';
import Button from '../Components/Button';
import Textfield from '../Components/Textfield'
import FormControl from '@material-ui/core/FormControl';
import './Hcard.css'
import { withStyles } from '@material-ui/core/styles';
import UploadMedia from '../Views/uploadMedia/index'
import PropTypes from "prop-types";


const styles = theme => ({
     formControl:{
             marginTop: 12
      },
})
class Hcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadDialog: false,
            ...this.props.initialState,

        }
    }

    //traversal the View data from previous level component and render the view of the form base on the length of each row
    renderForm = () => {
        return this.props.View.map(n => {
            return (
                <div key={n.title} className={`${n.title.toLowerCase()} col-12 container`}>
                    <p className={'hcard-sub-title col-12'}>{n.title}</p>
                    {n.form.map((col, i) => {
                        return this.renderColumnView(col, `col-${12 / n.form.length}`, i)
                    })}

                </div>
            )
        })

    }
    //render the textfield for each column, FormControl from material UI can easily implement the required, auto complete and format checking features
    renderColumnView = (data, type, index) => {
        const {classes} = this.props
        return (
            <div key={index + type} className={type} style={{marginRight: 24}}>
                {data.map(n => {
                    return (
                        <FormControl key={n.name} className={classes.formControl} fullWidth>
                            <Textfield value={this.state[n.name]} key={n.name} onChange={this.handleChange(n.name)}
                                       required={n.required} textLabel={n.textLabel} aria-label={n.name} id={n.name}
                                       autoComplete={n.name} type={n.type}
                                       name={n.name}/>
                        </FormControl>
                    )
                })}


            </div>
        )
    }

    handleClose = () => {
        this.setState({uploadDialog: false});

    };
    //update the textfield input and use getValues() pass the data to its parent component
    handleChange = name => event => {

        const newValues = {...this.state ,[name]: event.target.value};
        this.props.getValues(newValues)
        this.setState(newValues)
    };

    //update the avator and use getValues() pass the data to its parent component
    updateAvator=avator=>{
        const newValues = {...this.state ,avator: avator};
        this.setState({avator:avator})
        this.props.getValues(newValues)
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
            }} className={'container hcard-form'}>
                <UploadMedia getAvator={(avator)=>{this.updateAvator(avator)}} onClose={()=>{this.handleClose()}} open={this.state.uploadDialog}/>
                <h4 className={'hcard-title col-12'}>hCard Builder</h4>
                {this.renderForm()}
                <div className={'form-action col-12 container'}>
                    <div className={'col-6'} style={{marginRight: 24}}>
                        <Button onClick={()=>{this.setState({uploadDialog:true})}} theme={'secondary'}>
                            Upload Avatar
                        </Button>
                    </div>
                    <div className={'col-6'}>
                        <Button type='submit' theme={'primary'}>
                            Create hCard
                        </Button>
                    </div>


                </div>

            </form>
        );
    }

}

Hcard.propTypes = {
  initialState: PropTypes.object.isRequired,
  View: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hcard);
