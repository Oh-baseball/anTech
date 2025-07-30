import axios from 'axios';
import { PaymentMethodType } from '@/types/payment';

interface AuthPattern {
  user_id: number;
  auth_type: 'PIN' | 'PATTERN';
  auth_value: string;
  device_info: string;
  order_id: string | null;
  method_id: string | null;
  payment_method: PaymentMethodType;
  payment_amount: number;
  point_used: number;
}

export const sendAuthPattern = async (authPattern: AuthPattern) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}orders/authenticate-and-pay`,
    authPattern,
  );
  console.log(res.status);
  return res.data;
};

// export const getAuthPattern = async (device_id: string) => {
//     const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders/authenticate-and-pay`, {
//         params: {
//             device_id
//         }
//     })
//     return res.data
// }
