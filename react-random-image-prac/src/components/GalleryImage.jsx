import { useEffect, useRef } from 'react';
import styles from './GalleryImage.module.scss';

export default function GalleryImage({ id, url }) {
  const imgRef = useRef(null);

  useEffect(() => {
    imgRef.current?.addEventListener('click', () => {
      console.log('Image Click!!!');
    });
  }, []);

  return (
    <div className={styles.gallery__image}>
      <img key={id} src={url} alt="" ref={imgRef} />
    </div>
  );
}
