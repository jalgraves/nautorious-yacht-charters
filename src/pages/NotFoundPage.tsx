import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page not found.</p>
      <Link to="/" className={styles.link}>Go home</Link>
    </div>
  );
}

export default NotFoundPage;
