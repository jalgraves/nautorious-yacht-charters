import { useState, useCallback, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { GALLERIES, isGalleryId, type GalleryInfoBlock } from '@/galleries';
import styles from './Gallery.module.css';

function renderInfoBlock(block: GalleryInfoBlock, i: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={i} className={styles.galleryInfoText}>
          {block.text}
        </p>
      );
    case 'heading':
      return (
        <h3 key={i} className={styles.galleryInfoSection}>
          {block.text}
        </h3>
      );
    case 'subheading':
      return (
        <h4 key={i} className={styles.galleryInfoPlace}>
          {block.text}
        </h4>
      );
    case 'list':
      return (
        <ul key={i} className={styles.galleryInfoList}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default: {
      const _never: never = block;
      return _never;
    }
  }
}

function BoatGallery() {
  const { boatId = '' } = useParams<{ boatId: string }>();
  const gallery = isGalleryId(boatId) ? GALLERIES[boatId] : null;
  const title = gallery?.title ?? '';
  const info = gallery?.info;
  const photos = gallery?.photos ?? [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i !== null && i > 0 ? i - 1 : photos.length - 1,
      ),
    [photos.length],
  );

  const next = useCallback(
    () =>
      setActiveIndex((i) =>
        i !== null && i < photos.length - 1 ? i + 1 : 0,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeIndex, close, prev, next]);

  if (!gallery || !info) {
    return <Navigate to="/gallery" replace />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.backRow}>
        <Link to="/gallery" className={styles.backLink}>
          &larr; All Yachts
        </Link>
      </div>
      <h1 className={styles.heading}>{title}</h1>

      <section className={styles.galleryInfo} aria-labelledby="gallery-info-heading">
        <h2 id="gallery-info-heading" className={styles.galleryInfoHeading}>
          {info.heading}
        </h2>
        {info.blocks.map((block, i) => renderInfoBlock(block, i))}
      </section>

      <div className={styles.grid}>
        {photos.map((photo, i) => (
          <button
            key={photo.thumb}
            type="button"
            className={styles.thumb}
            onClick={() => setActiveIndex(i)}
            aria-label={`View photo ${i + 1}`}
          >
            <img
              src={photo.thumb}
              alt={`${title} photo ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className={styles.lightbox} onClick={close} role="dialog" aria-modal="true">
          <button type="button" className={styles.lbClose} onClick={close} aria-label="Close">
            &times;
          </button>

          <button
            type="button"
            className={`${styles.lbArrow} ${styles.lbPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>

          <img
            className={styles.lbImage}
            src={photos[activeIndex].full}
            alt={`${title} photo ${activeIndex + 1}`}
            decoding="async"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className={`${styles.lbArrow} ${styles.lbNext}`}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            &#8250;
          </button>

          <span className={styles.lbCounter}>
            {activeIndex + 1} / {photos.length}
          </span>
        </div>
      )}
    </div>
  );
}

export default BoatGallery;
