/* eslint-disable*/

import React from 'react';
import './help.css';
import PropTypes from 'prop-types';
import logoUser from "../imageHome/user.png"

class ConnectUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggin: false,
    };
  }

  render() {
    const { searchUser, onClick, userConnected, test } = this.props;
    console.log(typeof(userConnected));
    return (
      <div className="helpcontainer">
        <div
          className="help"
          onClick={() => {
            onClick();
            return searchUser && this.setState({ isLoggin: true });
          }}
          onKeyDown={onClick}
          aria-hidden="true"
        >
          <div className="contImageUser">
            {test && userConnected !== '' ? (
              <p className="letterConnected">{userConnected.pseudo[0]}</p>
            ) : (
              <img src={logoUser} id="userImage" alt="logo_user" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

ConnectUser.propTypes = {
  userConnected: PropTypes.string,
  onClick: PropTypes.func,
  searchUser: PropTypes.bool.isRequired,
};

ConnectUser.defaultProps = {
  onClick: () => {},
  userConnected: '',
};

export default ConnectUser;

/* eslint-enable */
