import React from "react";
import { connect } from "react-redux";
import { fetchMembers } from "../actions";
import "./Table.css";

class Table extends React.Component {
	componentDidMount() {
		this.props.fetchMembers();
	}

	renderTableData() {
		return this.props.members.map((member, index) => {
			const { firstName, lastName, address, ssn } = member;
			return (
				<tr key={index}>
					<td>{firstName}</td>
					<td>{lastName}</td>
					<td>{address}</td>
					<td>{ssn}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div className="table-container">
				<table className="table-content">
					<thead>
						<tr>
							<td>First Name</td>
							<td>Last Name</td>
							<td>Address</td>
							<td>SSN</td>
						</tr>
					</thead>
					<tbody>{this.renderTableData()}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { members: Object.values(state.members) };
};

export default connect(mapStateToProps, { fetchMembers })(Table);
