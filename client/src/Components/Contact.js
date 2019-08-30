import React from 'react';
import '../Styles/Contact.css';

export default class Contact extends React.Component {
  state = {
    formSubmitted: false
  };
  formSubmitted = e => {
    // NOTE DO NOT WANT TO PREVENT DEFAULT HERE IF YOU ARE TRYING TO RUN AN "onSubmit" and "action" on a form
    // e.preventDefault();

    const formEle = document.querySelector('.formEle');
    formEle.classList.remove('wow', 'fadeIn');
    formEle.classList.add('animated', 'bounceOutUp', 'delay-0s');

    setTimeout(() => {
      formEle.classList.add('opacify');
    }, 400);

    setTimeout(() => {
      this.setState({ formSubmitted: true });
    }, 1000);
  };

  revertForm = e => {
    e.preventDefault();

    const successForm = document.querySelector('.successCenter');

    successForm.classList.add('animated', 'bounceOutDown', 'delay-0s');
    setTimeout(() => {
      successForm.classList.add('opacify');
    }, 400);
    setTimeout(() => {
      this.setState({ formSubmitted: false });
    }, 1000);
  };

  render() {
    return (
      <div className="contactEle">
        <div className="paddingEle">
          {this.state.formSubmitted ? (
            <div className="successCenter">
              <div
                className="successEle wow fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="0.7s">
                <div>
                  <i className="check icon" />
                </div>
                <h2>Success</h2>
              </div>
              <button
                onClick={this.revertForm}
                className="sendAgainButt wow flipInX"
                data-wow-delay="1.5s"
                data-wow-duration="0.5s">
                Forgot something?
              </button>
            </div>
          ) : (
            <div className="formEle wow bounceInUp">
              <h3 className="enquireEle">
                Got a question? I'll respond within 24 hours!
                <br />
                <br /> Use the form below or reach me at{' '}
                <a href="mailto:nchulani2@gmail.com?subject=Greetings%20from%20naveenchulani.com!&amp;body=Hi%20Naveen%2C%0A%0AHow%20are%20you%3F%20My%20message%20is%20**insert%20message%20here**%0A%0AHope%20all%20is%20well!%0A%0ARegards%2C%0A**first_name%20last_name**%0A%0A">
                  nchulani2@gmail.com
                </a>
              </h3>
              <form
                onSubmit={this.formSubmitted}
                action="https://formspree.io/nchulani2@gmail.com"
                method="POST"
                target="_blank">
                <div className="ui form">
                  <div className="required field">
                    <input
                      required
                      autoComplete="on"
                      className="inputEle"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="required field">
                    <input
                      required
                      autoComplete="on"
                      className="inputEle"
                      type="email"
                      name="_replyto"
                      placeholder="Email"
                    />
                  </div>
                  <div className="field">
                    <textarea
                      className="inputEle"
                      type="text"
                      name="message"
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div className="submitDiv">
                  <button className="submitButtonEle" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}
