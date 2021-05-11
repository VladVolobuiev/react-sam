import React from 'react';
import s from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={s.textarea}
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button className={s.button}>Send</button>
      </div>
    </form>
  );
};
export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
