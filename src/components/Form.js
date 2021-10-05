import React from 'react'
import './form.css';
function Form(props) {
    return (
        <div className="container text-light">
            <div>{props.error?error():null}</div>
            <form onSubmit={props.loadWeather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input spellCheck="false" type="text" className="form-control" name="city" autoComplete="off" placeholder="city"/>
                </div>
                <div className="col-md-3">
                    <input spellCheck="false" type="text" className="form-control" name="country" autoComplete="off" placeholder="country"/>
                </div>
                <div className="col-md-3 mt-md-0 mt-2 text-md-left">
                    <button className="btn btn-warning" type="submit">Get Weather</button>
                </div>
            </div>
            </form>
            
        </div>
    )
}


function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please enter city and country
        </div>
    )
}

export default Form
