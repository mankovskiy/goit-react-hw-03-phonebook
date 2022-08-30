import { Component } from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { ContactFormLabel } from './ContactFormLabel.stuled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = ({ target: { value, name } }) => {
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      ...this.state,
      id: nanoid(5),
    };

    this.props.onAddContact(contact);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Formik>
        <form onSubmit={this.handleSubmit}>
          <ContactFormLabel>Name</ContactFormLabel>
          <input
            onChange={this.handleChangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
          <ContactFormLabel>Number</ContactFormLabel>
          <input
            onChange={this.handleChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
          <button type="submit">add contact</button>
        </form>
      </Formik>
    );
  }
}
