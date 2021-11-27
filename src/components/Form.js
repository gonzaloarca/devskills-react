import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import "./Form.css";
import { clearCreateError, createMember } from "../actions";

const formFields = [
	{ name: "firstName", label: "First Name" },
	{ name: "lastName", label: "Last Name" },
	{ name: "address", label: "Address" },
	{ name: "ssn", label: "SSN" },
];

const FORM_NAME = "memberForm";

class Form extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return <p className="error-text">{error}</p>;
		}
	}

	renderGlobalError = () => {
		if (this.props.createError) {
			return <p className="error-text">{`Error: ${this.props.createError}`}</p>;
		}
	};

	renderInput = ({ input, placeholder, meta }) => {
		return (
			<>
				<input
					className="form-input"
					{...input}
					placeholder={placeholder}
					autoComplete="off"
				/>
				{this.renderError(meta)}
			</>
		);
	};

	renderFields() {
		return formFields.map((field) => {
			return (
				<div key={field.name} className="form-row">
					<Field
						name={field.name}
						placeholder={field.label}
						component={this.renderInput}
					/>
				</div>
			);
		});
	}

	onReset = (event) => {
		event.preventDefault();
		this.props.dispatch(reset(FORM_NAME));
	};

	onSubmit = (formValues) => {
		this.props.clearCreateError();
		this.props.createMember(formValues);
	};

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="form-container"
			>
				{this.renderGlobalError()}
				{this.renderFields()}
				<div className="form-actions">
					<button onClick={(e) => this.onReset(e)}>Reset</button>
					<button disabled={this.props.invalid}>Save</button>
				</div>
			</form>
		);
	}
}

const getLengthMessage = (fieldLabel, minimumLength) =>
	`${fieldLabel} must be at least ${minimumLength} characters long.`;

const validLength = (fieldValue, minimumLength) =>
	fieldValue && fieldValue.length >= minimumLength;

const validate = (formValues) => {
	const errors = {};

	const MINIMUM_LENGTH = 2;
	const SSN_PATTERN = /^\d{3}-\d{2}-\d{4}$/;

	if (!validLength(formValues.firstName, MINIMUM_LENGTH)) {
		errors.firstName = getLengthMessage("First Name", MINIMUM_LENGTH);
	}
	if (!validLength(formValues.lastName, MINIMUM_LENGTH)) {
		errors.lastName = getLengthMessage("Last Name", MINIMUM_LENGTH);
	}
	if (!validLength(formValues.address, MINIMUM_LENGTH)) {
		errors.address = getLengthMessage("Address", MINIMUM_LENGTH);
	}
	if (!SSN_PATTERN.test(formValues.ssn)) {
		errors.ssn = "You must enter a valid SSN";
	}

	return errors;
};

const formWrapped = reduxForm({
	form: FORM_NAME,
	validate,
})(Form);

const mapStateToProps = (state) => {
	return { createError: state.createError };
};

export default connect(mapStateToProps, { createMember, clearCreateError })(
	formWrapped
);
