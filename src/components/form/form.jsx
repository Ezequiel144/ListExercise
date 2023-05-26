import React from "react";
import './form.css'

export function Form(){
    return(
        <section className="form-content">
            <form className="row g-3 formulary">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Name</label>
                    <input type="text" name="from-email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">SubName</label>
                    <input type="text" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option value={"BuenosAires"}>Buenos Aires</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div className="col-12 content-button">
                    <button type="submit" className="btn btn-warning text-light">Sign in</button>
                </div>
            </form>
        </section>
    )
}