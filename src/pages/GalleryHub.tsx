import { Link } from 'react-router-dom';
import { GALLERIES, GALLERY_IDS } from '@/galleries';
import styles from './Gallery.module.css';

function GalleryHub() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Our Fleet</h1>
      <p className={styles.hubIntro}>
        Browse full photo sets and information for each vessel. Select a yacht below.
      </p>
      <div className={styles.hubGrid}>
        {GALLERY_IDS.map((id) => (
          <Link key={id} to={`/gallery/${id}`} className={styles.hubCard}>
            <h2 className={styles.hubCardTitle}>{GALLERIES[id].title}</h2>
            <p className={styles.hubCardHint}>
              {GALLERIES[id].photos.length} photos
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GalleryHub;
