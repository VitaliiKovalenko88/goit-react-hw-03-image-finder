import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, tags, modalUrl, id }) => {
  return (
    <li className={css.listItem} key={id}>
      <img className={css.image} src={url} alt={tags} data-image={modalUrl} />
    </li>
  );
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  modalUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
