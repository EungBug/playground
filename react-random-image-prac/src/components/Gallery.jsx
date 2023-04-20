import { useRef, useEffect } from 'react';
import GalleryImage from './GalleryImage';
import SkeletonImage from './SkeletonImage';

import styles from './Gallery.module.scss';

export default function Gallery({ images, isLoading }) {
  const skeletonRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      skeletonRef.current.classList.add(styles['show']);
      console.log('show');
    } else {
      skeletonRef.current.classList.remove(styles['show']);
      console.log('remove');
    }
  }, [isLoading]);
  const initSkeletonUI = () => {
    const skeletons = [];
    for (let i = 0; i < 30; i++) {
      skeletons.push(<SkeletonImage index={i} />);
    }
    return skeletons;
  };

  return (
    <div className={styles.gallery}>
      <div className={styles['skeleton-container']} ref={skeletonRef}>
        {initSkeletonUI()}
      </div>
      <div className={styles['gallery-container']}>
        {images?.map(image => (
          <GalleryImage id={image.id} url={image.download_url} />
        ))}
      </div>
    </div>
  );
}
