import styles from './style.module.scss';

const QRScanLayout = () => {
  return (
    <div className={styles.qr_container}>
      <div className={styles.video_section}>
        <video autoPlay muted playsInline >
          <source src="src/assets/qr_test_video.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  )
};

export default QRScanLayout