import React from 'react';
import ReactDOM from 'react-dom';

import Button from './button';

const users = [];

const App = ({users}) => (
  <div>
    <h1>My Application</h1>
    <h2>
      Users
      <Button>Add User</Button>
    </h2>
    <UserList users={users} />
  </div>
);

function renderApp() {
  ReactDOM.render(<App users={users} />, document.getElementById('app'));
}

renderApp();
