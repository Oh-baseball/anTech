import useDarkModeStore from '@/store/useDarkModeStore';
import styles from './style.module.scss';
import Header from '@/components/Header';

const QRScanLayout = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode)

  return (
    <div className={styles.qr_container}>
      <Header
        prevBtn={true}
        title="QR 스캔"
      />
      <div className={styles.video_section}>
        <video autoPlay muted playsInline >
          <source src="src/assets/qr_test_video.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className={`${styles.storeInfoBox} ${darkMode ? styles.dark_mode : ''}`}>
        <div className={styles.left_items}>
          <p>스타벅스 강남점</p>
          <p>서울특별시 강남구 테헤란로 152</p>
        </div>
        <div className={styles.right_items}>
          <img src='/src/assets/store.svg' alt="매장 이미지"/>
        </div>
      </div>
    </div>
  )
};

export default QRScanLayout