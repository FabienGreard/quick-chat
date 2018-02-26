import React from 'react';

/* CSS */
import './Alert.css';

const Alert = ({alert}) => (
    <div className="msg-alert">
  {
    typeof alert !== 'undefined' && alert.message
  }
</div>

);

export { Alert };
