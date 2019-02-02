import React from 'react';

import requireAuth from 'components/App/requireAuth';

const UserAccount = () => {
  return (
    <h3>User Account</h3>
  )
}

export default requireAuth(UserAccount);
