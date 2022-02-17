import { ChangeEvent } from 'react';
import './Form.css';

export default function Form() {
	function submitHandler(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		alert('Form submitted');
	}

	return (
		<form onSubmit={submitHandler} className="form" action="https://fcc-registration-form.com">
			<fieldset>
				<label>
					Enter Your First Name: <input required type="text" name="firstName" />
				</label>
				<label>
					Enter Your Last Name: <input required type="text" name="lastName" />
				</label>
				<label>
					Enter Your Email: <input required type="email" name="email" />
				</label>
				<label title="Minimum eight characters, at least one letter, one number and one special character">
					Create a New Password:
					<input
						required
						type="password"
						name="password"
						pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
					/>
				</label>
			</fieldset>
			<fieldset>
				<label>
					<input checked type="radio" name="account-type" /> Personal Account
				</label>
				<label>
					<input type="radio" name="account-type" /> Business Account
				</label>
				<label>
					<input type="checkbox" required /> I accept the &nbsp; 
						<a href="https://www.freecodecamp.org/news/terms-of-service/"> terms and conditions</a>
				</label>
			</fieldset>
			<fieldset>
			<label>Upload a profile picture: <input id='file' type='file'/></label>
			</fieldset>
			<input type="submit" value="Submit" />
		</form>
	);
}
