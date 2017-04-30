import React, { Component } from 'react';
import axios from 'axios';
import Preview from './preview'
import Items from './items'
import Config from '../config'

class Registration extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      tickets: 1,
      name: '',
      email: '',
      mobile: '',
      rtype: 'Self',
      idcard: '',
      showPreview: false,
      showItem: true,
      showSubmit: true,
      showID: false,
      showBack: false,
      id: 0,
      showValid: false,
      errormsg: 'Must Fill all Fields'
    };
    this.hidePreview = this.hidePreview.bind(this);
    this.showPreview = this.showPreview.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.phonenumber = this.phonenumber.bind(this);
    
  }

  handleInputChange(propertyName, event) {
    event.preventDefault(); 
    if (propertyName === 'idcard') {
      let file = event.target.files[0];
      let reader = new FileReader();
      
      reader.onloadend = () => {
        this.setState({
          [propertyName]: reader.result
        });
      }
      reader.readAsDataURL(file)

    }
    else {
      this.setState({
        [propertyName]: event.target.value
      });
    }
  }

  phonenumber(mobile) {  
    let phoneno = /^\d{10}$/;  
    if(!mobile.match(phoneno)) {  
        this.setState({ errormsg : "Please input 10 digit mobile number"
      });  
    }  
  }  

  handleSubmit(event) {
    const self = this;
    event.preventDefault();
    if (this.state.name === '' || this.state.email === '' || this.state.idcard === '') {
        console.log(this.state.mobile)
        console.log('---')
        this.phonenumber(this.state.mobile)
        this.setState({
          showValid: true
        });
        setTimeout(() => { this.setState({
        showValid: false
        }); }, 3000);
        return
    }
    axios.post(Config.API_URL + 'registration', {
      name: this.state.name,
      mobile: Number(this.state.mobile),
      email: this.state.email,
      idcard: this.state.idcard,
      tickets: Number(this.state.tickets),
      rtype: this.state.rtype,
    })
    .then(function (response) {
      self.setState({
        id: response.data.user
      });
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.showPreview();
    this.hideSubmit();

  }

  showPreview() {
      this.setState({
        showPreview: true,
        showItem: false,
        showBack: true
      });
  }

  hideSubmit() {
      this.setState({
        showSubmit: false,
        showID: true,
        showBack: false
      });
  }

  hidePreview() {
      this.setState({
        showPreview: false,
        showItem: true
      });
  }

  render() {
    return (
      <div className="main-content">
        <form className="form-basic" onSubmit={this.handleSubmit}>
            {this.state.showID ?<div className="form-title-row"><h2>Reg ID : {this.state.id}</h2></div> : null}            
            {this.state.showItem ? <Items handleInputChange={this.handleInputChange}
                                          tickets={this.state.tickets} 
                                          name={this.state.name}
                                          email={this.state.email}
                                          mobile={this.state.mobile}
                                          rtype={this.state.rtype}
                                          idcard={this.state.idcard}
                                    /> : null}
            {this.state.showValid ? <div className="form-row"><p className="warning">{this.state.errormsg}</p></div> : null}
            
            {this.state.showPreview ? <Preview tickets={this.state.tickets} 
                                                name={this.state.name}
                                                email={this.state.email}
                                                mobile={this.state.mobile}
                                                rtype={this.state.rtype}
                                                idcard={this.state.idcard}
                                      /> : null}
            <div className="outer">
                <div>
                  {this.state.showBack ? <button className="inner" type="button" onClick={this.hidePreview}>Back</button> : null}
                  {this.state.showItem ? <button className="inner" type="button" onClick={this.showPreview}>Preview</button> : null}
                  {this.state.showSubmit ? <button className="inner" type="submit" value="Submit">Submit Form</button> : null}
                </div>
            </div>

        </form>

    </div>

    );
  }
}

export default Registration;