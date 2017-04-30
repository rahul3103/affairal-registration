import React, { Component } from 'react';

class Preview extends Component {

  render() {
    let info = this.props
    return (
      <div className="main-content">
            <div className="form-title-row">
                <h1>Details</h1>
            </div>

            <div className="form-row">
                <label>
                    <span>Full name</span>
                    <span>{info.name}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Mobile</span>
                    <span>{info.mobile}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>E-mail</span>
                    <span>{info.email}</span>
                </label>
            </div>

            <div className="form-row">
                <label className="upload">
                    <span>Upload ID Card</span>
                    <span className="imgcon"><img src={info.idcard} alt="ID"/></span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Registration Type</span>
                    <span>{info.rtype}</span>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Number of Tickets</span>
                    <span>{info.tickets}</span>
                </label>
            </div>
    </div>

    );
  }
}

export default Preview;