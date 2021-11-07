import styled from 'styled-components';

const Button = styled.button`
color: #fff;
background-color: #b40000;
font-family: Red Hat Display;
font-size: ${(props) => props.theme.fontSize};
margin: 1em;
padding: 0.25em 1em;
border: 0px solid palevioletred;
border-radius: 3px;
border-radius: 80px;
`;

Button.defaultProps = {
  theme: {
    fontSize: '1em',
  },
};

export default Button;
