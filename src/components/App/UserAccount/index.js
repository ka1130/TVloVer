import React from 'react';

import requireAuth from 'components/App/requireAuth';

const UserAccount = props => {
  return (
    <h3>User Account</h3>
  )
}

export default requireAuth(UserAccount);
