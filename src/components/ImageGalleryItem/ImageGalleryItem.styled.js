import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 15px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Images = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  && {
    :hover {
      transform: scale(1.05);
      cursor: zoom-in;
    }
  }
`;

export const Item = styled.li`
  box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.2);
`;
