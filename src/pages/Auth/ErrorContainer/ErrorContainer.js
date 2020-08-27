import React from 'react';
import styled from 'styled-components';

const ErrorComponent = styled.div`
  padding: 20px 0;
`;

const ErrorContainer = ({ children }) => {
  return <ErrorComponent>{children}</ErrorComponent>;
};

export default ErrorContainer;
