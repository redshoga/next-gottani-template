import * as React from 'react';

export const Button: React.SFC<{}> = props => (
  <button>
    {props.children}
  </button>
);
