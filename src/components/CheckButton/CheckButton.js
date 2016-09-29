import React from 'react'
import classes from './CheckButton.scss'

export const CheckButton = (props) => {
    let message = null;

    if(props.checked){
        if(props.valid)
            message = (<div className={classes.correct}>Correct</div>);
        else
            message = (<div className={classes.incorrect}>Incorrect</div>);
    }

    return (
        <div className={classes.checkButton}>
            {message}
            <button 
                className='btn btn-default' 
                onClick={props.checkMarkers} 
                disabled={!props.ready}>
                Check
            </button>
        </div>
    );
}

CheckButton.propTypes = {
  checkMarkers: React.PropTypes.func.isRequired,
  ready: React.PropTypes.bool.isRequired,
  checked: React.PropTypes.bool.isRequired,
  valid: React.PropTypes.bool.isRequired,
}

export default CheckButton