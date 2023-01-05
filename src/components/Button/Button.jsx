import { Button } from './Button.styled';
import PropTypes from 'prop-types';

export const LoadMore = ({ onClick }) => {
  return (
    <>
      <Button onClick={onClick} type="button">
        Load more
      </Button>
    </>
  );
};

LoadMore.propType = {
  onClick: PropTypes.func.isRequired,
};
