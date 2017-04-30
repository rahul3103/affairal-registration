import React, {Component} from 'react';
import DateConverter from './utils';


class UserList extends Component {
  

  render() {
    const user = this.props.user;
    let localDate = DateConverter(new Date(user.rdate));

    return (
      <tr>
        <td className="col1">
          <a href={"users/"+user.id}>{user.id}</a>
        </td>
        <td className="col2">
          {user.name}
        </td>
        <td className="col3">
          {user.mobile}
        </td>
        <td className="col4">{user.email}</td>
        <td className="col5">
          {localDate}
        </td>
        <td className="col6">
          {user.rtype}
        </td>
        <td className="col7">
          {user.tickets}
        </td>
      </tr>
    );
  }
}

export default UserList;