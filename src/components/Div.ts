import styled from 'styled-components';

const Div = styled.div`
    background-color: ${(props) => props.theme.bgColor};
    border-radius: 1em;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    width: 100%;
`;

Div.defaultProps = {
  theme: {
    bgColor: '#e8e8e8',
  },
};

export default Div;
