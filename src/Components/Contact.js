import React from 'react';
import axios from 'axios';
import '../Styles/Contact.css';
import { BASE_URL } from '../index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Contact extends React.Component {
  state = {
    formSubmitted: false,
    name: '',
    email: '',
    text: '',
    loading: false
  };

  formSubmitted = async e => {
    // Reset errors and success on submit
    this.setState({ loading: true });
    // NOTE DO NOT WANT TO PREVENT DEFAULT HERE IF YOU ARE TRYING TO RUN AN "onSubmit" and "action" on a form
    const { name, text, email } = this.state;
    // const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    e.preventDefault();
    var clientDetails = {
      name: name,
      email: email,
      text: text
    };

    await axios
      .post(BASE_URL, clientDetails)
      .then(res => {
        if (res.data.errors) {
          this.setState({
            loading: false
          });
          res.data.errors.map(err => this.notifyErrs(err));

          // Success message
        } else if (res.data.success) {
          this.setState({
            name: '',
            email: '',
            text: '',
            loading: false
          });
          this.notifySuccess(res.data.success);
        }
      })
      .catch(err => {
        alert('Something must have went wrong, try again later');
        console.log(err);
      });
  };

  notifyErrs = err => {
    toast(err.msg, {
      position: toast.POSITION.TOP_LEFT,
      type: toast.TYPE.ERROR,
      autoClose: 5000,
      className: 'errorCont',
      bodyClassName: 'errorContBody',
      progressClassName: 'errorProgress'
    });
  };

  notifySuccess = success => {
    toast(success, {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.SUCCESS,
      autoClose: 5000,
      className: 'successCont',
      bodyClassName: 'successContBody',
      progressClassName: 'successProgress'
    });
  };

  render() {
    return (
      <div className="contactEle">
        <div
          className="formEle"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="350">
          <h3
            className="enquireEle"
            data-aos="flip-down"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-delay="50">
            Got a question? I'll respond within 24 hours!
            <br />
            <br /> Use the form below or reach me at{' '}
            <a href="mailto:nchulani2@gmail.com?subject=Greetings%20from%20naveenchulani.com!&amp;body=Hi%20Naveen%2C%0A%0AHow%20are%20you%3F%20My%20message%20is%20**insert%20message%20here**%0A%0AHope%20all%20is%20well!%0A%0ARegards%2C%0A**first_name%20last_name**%0A%0A">
              nchulani2@gmail.com
            </a>
          </h3>
          <form onSubmit={this.formSubmitted}>
            <div className="ui form">
              <div className="required field">
                <input
                  required
                  onChange={e => {
                    this.setState({ name: e.target.value });
                  }}
                  value={this.state.name}
                  autoComplete="off"
                  className="inputEle"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
              </div>

              <div className="required field">
                <input
                  required
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                  value={this.state.email}
                  autoComplete="off"
                  className="inputEle"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="required field">
                <textarea
                  onChange={e => {
                    this.setState({ text: e.target.value });
                  }}
                  value={this.state.text}
                  className="inputEle"
                  type="text"
                  name="text"
                  placeholder="Message"
                />
              </div>
            </div>
            <div className="submitDiv">
              <button className="submitButtonEle" type="submit">
                {this.state.loading ? (
                  <div className="loaderButton">
                    <i className="notched circle loading icon"></i>
                  </div>
                ) : (
                  <span>Send</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
