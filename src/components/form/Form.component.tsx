import { ChangeEvent } from 'react';
import './Form.css'

export default function Form() {
    function submitHandler(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        alert('Form submitted')
    }

	return (
		<form onSubmit={submitHandler} className="form" action="https://fcc-registration-form.com">
			<fieldset>
				<label>Enter Your First Name: <input required type="text" name="firstName" /></label>
				<label>Enter Your Last Name: <input required type="text" name="lastName" /></label>
				<label>Enter Your Email: <input required type="email" name="email" /></label>
				<label>Create a New Password: <input required type="password" name="password" /></label>
			</fieldset>
			<fieldset />
			<fieldset />
            <input type='submit' value='Submit'></input>
		</form>
	);
}
