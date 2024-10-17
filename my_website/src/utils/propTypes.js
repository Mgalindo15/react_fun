import PropTypes from 'prop-types';

export const DialogueItemPropTypes = {
  dialogue: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
