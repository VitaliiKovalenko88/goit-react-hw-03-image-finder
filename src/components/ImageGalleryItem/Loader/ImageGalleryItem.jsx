import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ url, tags, modalUrl }) => {
  return (
    <>
      <img src={url} alt={tags} data-image={modalUrl} />
    </>
  );
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  modalUrl: PropTypes.string.isRequired,
};
