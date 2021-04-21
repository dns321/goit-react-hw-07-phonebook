import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contact-operations';
import style from './ContactForm.module.css';
import { getLoading } from '../../redux/contacts-selectors';
import { getContactName } from '../../redux/contacts-selectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  componentDidMount() {
    this.props.fetchContact();
  }

  handlerChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  checkUniqueContact = name => {
    const findeContact = !this.props.name.find(contact => contact === name);
    return findeContact;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    this.checkUniqueContact(name);

    if (this.state.name !== '') {
      if (!this.checkUniqueContact(name)) {
        alert(`'${name} isalready in contacts'`);
        return;
      } else {
        this.props.onSubmit(this.state);
        this.reset();
      }
      return;
    }
    alert('Enter the name and number');
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              className={style.inputStyle}
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handlerChange}
            ></input>
          </label>

          <label>
            Number
            <input
              className={style.inputStyle}
              type="tel"
              name="number"
              placeholder="Enter phone namber"
              value={this.state.number}
              onChange={this.handlerChange}
            ></input>
          </label>

          <button type="submit">Add contact</button>
        </form>
        {this.props.loadingConntacts && <h1>LOADING...</h1>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  loadingConntacts: getLoading(state),
  name: getContactName(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
  onSubmit: data => dispatch(contactsOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
