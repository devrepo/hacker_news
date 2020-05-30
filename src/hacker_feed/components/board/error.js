import PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = styled.div`
    animation: fade-in 2s ease-in-out forwards;
    padding: 10px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    right: 0px;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    background-color: red;

    @keyframes fade-in {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }    
`;

Error.propTypes = {
    visible : PropTypes.bool
}

Error.defaultProps = {
    visible: false
};

export default Error;