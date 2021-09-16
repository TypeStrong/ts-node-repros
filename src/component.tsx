import React, { FunctionComponent } from 'react';

// ---------------------------------------------------------------------

type TestProps = {
  message: string;
};

const TestComponent: FunctionComponent<TestProps> = ({ message }) => {
  return (
    <div>{message}</div>
  );
};

export default TestComponent;
