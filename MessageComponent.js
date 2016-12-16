import React from 'react';
import ReactDOM from 'react-dom';

class MessageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.state = {
            nameValue: '',
            nameHasError: false,
            emailValue: '',
            emailHasError: false,
            messageValue: '',
            messageHasError: false,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    isValidName(name) {
        return (name && name.trim() !== "") ? true : false;
    }

    isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    isValidMessage(message) {
        return (message && message.trim() !== "") ? true : false;
    }

    handleSubmit(event) {
        event.preventDefault();

        // Validate form data
        if (!this.isValidName(this.state.nameValue)) {
            this.setState({
                nameHasError: true
            });
            return;
        } else {
            this.setState({
                nameHasError: false
            });
        }

        if (!this.isValidEmail(this.state.emailValue)) {
            this.setState({
                emailHasError: true
            });
            return;
        } else {
            this.setState({
                emailHasError: false
            });
        }

        if (!this.isValidMessage(this.state.messageValue)) {
            this.setState({
                messageHasError: true
            });
            return;
        } else {
            this.setState({
                messageHasError: false
            });
        }

        // Send data to back end
        var messageData = {
        	name: this.state.nameValue,
        	email: this.state.emailValue,
        	message: this.state.messageValue
        };


    }


    handleNameChange(event) {
        this.setState({
            nameValue: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            emailValue: event.target.value
        });
    }

    handleMessageChange(event) {
        this.setState({
            messageValue: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} noValidate>
		   <div className={this.state.nameHasError ? 'form-group has-error' : 'form-group'} >
			  <label for="name">Name:*</label>
			  <input type="text" className="form-control" id="name"  value={this.state.nameValue} onChange={this.handleNameChange}></input>
			   <p className="help-block" style={!this.state.nameHasError ? { display: 'none' } : { visibility: 'visible' } }>Bitte Vornamen eingeben.</p>
			</div>
			<div className={this.state.emailHasError ? 'form-group has-error' : 'form-group'}>
			  <label for="email">Email:*</label>
			  <input type="email" className="form-control" id="email" value={this.state.emailValue} onChange={this.handleEmailChange}></input>
			  <p className="help-block" style={!this.state.emailHasError ?  { display: 'none' } : { visibility: 'visible' } }>Bitte eine korrekte Email Adresse eingeben.</p>
			</div>
			<div className={this.state.messageHasError ? 'form-group has-error' : 'form-group'}>
				<label for="message">Message:*</label>
				<textarea className="form-control" rows="5" id="message" value={this.state.messageValue} onChange={this.handleMessageChange}></textarea>
				<p className="help-block" style={!this.state.messageHasError ?  { display: 'none' } : { visibility: 'visible' } }>Bitte eine Nachricht eingeben.</p>
			 </div>
			  <input type="submit" className="btn btn-default"  value="Abschicken"/>
		</form>
        )
    }
}

ReactDOM.render(<MessageComponent/>, document.getElementById('root'));
