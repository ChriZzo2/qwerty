export interface ToastState {
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }
  
  export interface RegisterFormData {
    name: string;
    email: string;
  }