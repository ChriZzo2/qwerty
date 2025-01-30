import api from './client';
import Cookies from 'js-cookie';
import { CONFIG } from '../config';

interface RegisterData {
  name: string;
  email: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface ResetPasswordData {
  email: string;
  password: string;
  again_password: string;
  hash: string;
}
interface UpdateUserData {
  name: string;
  tg_name: string;
  notifications_email: boolean;
  notifications_tg: boolean;
}


export const authApi = {
  register: (data: RegisterData) => 
    api.post('/users', data),
    
  login: async (data: LoginData) => {
    const response = await api.put('/auth_user', data);
    if (response.data.token) {
      Cookies.set('token', response.data.token, { 
        domain: CONFIG.COOKIE_DOMAIN 
      });
    }
    return response;
  },

  logout: () => {
    // const token = Cookies.get('token');
    Cookies.remove('token', { domain: CONFIG.COOKIE_DOMAIN });
    return api.put('/logout_user', {});
  },

  getUserInfo: () => 
    api.get('/user_info'),

  sendResetLink: (email: string) => 
    api.post('/send_reset_link', { email }),

  resetPassword: (data: ResetPasswordData) => 
    api.put('/reset_password', data),
  updateUser: (data: UpdateUserData) => 
    api.put('/update_user', data),

};