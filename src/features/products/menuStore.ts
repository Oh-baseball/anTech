import { create } from 'zustand';
import { StoreMenuBoxItem } from '@/types/store';
import fetchMenusByStoreId from '@/apis/stores/fetchMenusByStoreId';

interface MenuStore {
  storeId: number;
  menuItems: StoreMenuBoxItem[];
  categories: string[];
  fetchMenus: () => Promise<void>;
  setStoreId: (id: number) => void;
}

const useMenuStore = create<MenuStore>((set, get) => ({
  storeId: 1,
  menuItems: [],
  categories: [],
  setStoreId: (id) => set({ storeId: id }),
  fetchMenus: async () => {
    try {
      const res = await fetchMenusByStoreId(get().storeId);
      if (res.success) {
        const items = res.data;
        console.log(items);
        const processed: StoreMenuBoxItem[] = items.map(item => ({
          id: item.menu_id,
          img: item.image_url,
          name: item.menu_name,
          content: item.description,
          price: item.price,
          category: item.category.category_name,
        }));
        const uniqueCategories = [...new Set(processed.map(item => item.category))];

        set({
          menuItems: processed,
          categories: uniqueCategories,
        });
      }
    } catch (err) {
      console.error('Zustand 메뉴 불러오기 실패:', err);
    }
  },
}));

export default useMenuStore;
