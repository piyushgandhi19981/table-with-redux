import React from "react";
import { connect } from "react-redux";
import DataTable from "./components/DataTable";
import "./styles.css";
import { addUser } from "./reducers/actionCreator";

const App = (props) => {
  console.log(props);
  const headers = ["Name", "Age", "Email"];
  const data = [
    ["John Doe", 28, "john@example.com"],
    ["Jane Smith", 34, "jane@example.com"],
    ["Sam Green", 22, "sam@example.com"],
  ];

  const { addUserAction, users = [] } = props;

  const handleAddUser = () => {
    addUserAction(["P G", 25, "pg@example.com"]);
  };

  return (
    <div className="app">
      <h1>User Data</h1>
      <DataTable headers={headers} data={[...data, ...users]} />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state?.usersReducer?.users || [],
  };
};

const mapDispatchToProps = {
  addUserAction: addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
