import styled from 'styled-components';

const Title = styled.h1`
    font-family: Red Hat Display;
    color: #b40000;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize};
`;

Title.defaultProps = {
  theme: {
    fontSize: '3Opx',
  },
};

export default Title;
