import styles from './SkeletonImage.module.scss';

export default function SkeletonImage({ index }) {
  return <div className={styles.skeleton} key={'k' + index}></div>;
}
