import PropTypes from 'prop-types';

export function fetchImages(searchName, page) {
  const searchParams = new URLSearchParams({
    key: '31282764-0017d0f99317739c03b205fc8',
    q: searchName.split(' ').join('+'),
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 12,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`No photos for search query: ${searchName}`)
    );
  });
}

fetchImages.propType = {
  searchName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
