import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadingImage from '../../assets/loading.gif';

const Loader = styled.img.attrs({
    src: loadingImage
})`
  width: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  background-color: #0d503b;
`;

Loader.propTypes = {
  visible : PropTypes.bool
}

Loader.defaultProps = {
  visible: false
};

export default Loader;
