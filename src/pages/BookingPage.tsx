import styles from './BookingPage.module.css';

function BookingPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageHeading}>Booking</h1>
      <p>If you are interested in booking a charter experience please contact us at:</p>
      <p>Email</p>
      <p><strong>NautoriousYachtCharters@gmail.com</strong></p>
      <p>Phone</p>
      <p><strong>919-609-3147</strong></p>
    </div>
  );
}

export default BookingPage;
