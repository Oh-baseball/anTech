import styles from './style.module.scss';

export interface StoreTabBoxItem {
  name: string;
}

interface StoreTabBoxProps {
    StoreTabBoxItmes?: StoreTabBoxItem[];
    activeTab?: string;
    onTabClick?: (category: string) => void;
}

const dummyTabItems = [
    {name:"커피"},
    {name:"디저트"},
    {name:"샌드위치"}
  ];
  
const StoreTabBox = ({ StoreTabBoxItmes, activeTab, onTabClick }: StoreTabBoxProps) => {
    const items = StoreTabBoxItmes ?? dummyTabItems;
    return (
        <>
        <div className={styles.storeTabBox}>
          {items.map((boxItem, idx) => (
            <button 
              key={idx}
              className={activeTab === boxItem.name ? styles.activeTab : ''}
              onClick={() => onTabClick?.(boxItem.name)}
            >
              {boxItem.name}
            </button>
          ))}
        </div>
        </>
    )
  };
  
  export default StoreTabBox;