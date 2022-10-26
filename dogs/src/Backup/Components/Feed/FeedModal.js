import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
//import { PHOTO_GET } from '../../api';
import PhotoContent from '../Photo/PhotoContent';
//import { fetchPhoto } from '../../store/photo';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/ui';

const FeedModal = () => {
  // const { data, loading, error, request } = useFetch();
  const { modal } = useSelector((state) => state.ui);
  const { loading, error, data } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   //photo.id veio do FeedPhotosItem.js apenas
  //   //para fornecer o numero do ID para que então
  //   //seja feito um fetch especifico no ID
  //   //para retornar a foto para o PhotoContent
  //   //setando todas informações dentro de data do useFetch
  //   const { url, options } = PHOTO_GET(photo.id);
  //   request(url, options);
  // }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) dispatch(closeModal());
  }

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading error={error} />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
