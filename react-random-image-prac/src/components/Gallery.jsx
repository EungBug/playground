import GalleryImage from './GalleryImage';
import styles from './Gallery.module.scss';

export default function Gallery({ images }) {
  return (
    <div className={styles.gallery}>
      {images?.map(image => (
        <GalleryImage id={image.id} url={image.download_url} />
      ))}
    </div>
  );
}
