export interface User {
    id: string;
    name: string;
    email: string;
    tg_name?: string;
    notifications_email?: boolean;
    notifications_tg?: boolean;
}

export interface LoginCredentials {
    email: string;
    password: string;
    Message?: string;
}

export interface RegisterCredentials {
    name: string;
    email: string;
}

export interface ResetPasswordData {
    email: string;
    password: string;
    again_password: string;
    hash: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}