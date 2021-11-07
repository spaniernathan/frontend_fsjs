import { Div } from 'components';
import styled from 'styled-components';

const Channel = styled.div`
    flex:1;
    color:gray;
    cursor: pointer;
    padding: 0px;
    padding-left: 40px;
    &:hover {
        color:white;
        cursor: pointer;
        background-color: rgba(0, 0, 0, .1);
    }
    
`;

export default Channel;
