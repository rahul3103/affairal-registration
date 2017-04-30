import React, { Component } from 'react';
import Config from '../config';

class Items extends Component {
  
  render() {
    let info = this.props;
    let regis_type = null;
    regis_type = Config.reg_type.map(function itr(type) {
            return (<option key={type} value={type}>{type}</option>);
          });
    let tickets = null;
    tickets = Config.tickets.map(function itr(ticket) {
            return (<option key={ticket} value={ticket}>{ticket}</option>);
          });
    return (
      <div className="main-content">

            <div className="form-title-row">
                <h1>Sign Up</h1>
            </div>

            <div className="form-row">
                <label>
                    <span>Full name</span>
                    <input type="text" value={info.name} name="name" onChange={this.props.handleInputChange.bind(this, 'name')}/>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Mobile</span>
                    <input type="text" value={info.mobile} name="mobile" onChange={this.props.handleInputChange.bind(this, 'mobile')}/>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>E-mail</span>
                    <input type="email" value={info.email} name="email" onChange={this.props.handleInputChange.bind(this, 'email')}/>
                </label>
            </div>

            <div className="form-row">
                <label className="upload">
                    <span>Upload ID Card</span>
                    <input type="file" name="idcard" onChange={this.props.handleInputChange.bind(this, 'idcard')}/>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Registration Type</span>
                    <select value={info.rtype} name="rtype" onChange={this.props.handleInputChange.bind(this, 'rtype')}>
                        {regis_type}
                    </select>
                </label>
            </div>

            <div className="form-row">
                <label>
                    <span>Number of Tickets</span>
                    <select value={info.tickets} name="tickets" onChange={this.props.handleInputChange.bind(this, 'tickets')}>
                        {tickets}
                    </select>
                </label>
            </div>
    </div>

    );
  }
}

export default Items;