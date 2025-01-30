import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Provider} from 'react-redux';

import {DashboardLayout} from '@/layouts/DashboardLayout';
import {store} from '@/store';
import {SettingsPage} from "@/pages/SettingsPage.tsx";
import {AssistantsPage} from '@/pages/AssistantsPage';
import {ChangePasswordPage} from '@/pages/ChangePasswordPage';
import {SubscriptionPage} from '@/pages/SubscriptionPage';
import {PrivateRoute} from '@/components/PrivateRoute';
import {PublicRoute} from '@/components/PublicRoute';
import {LoginForm} from '@/components/auth/LoginForm';
import {RegisterForm} from '@/components/auth/RegisterForm';

import GlobalStyles from "@/styles/global.ts";
import {ThemeProvider} from "styled-components";
import {theme} from "@/styles/theme.ts";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                        <Route
                            path="/login"
                            element={
                                <PublicRoute>
                                    <LoginForm/>
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <PublicRoute>
                                    <RegisterForm/>
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <DashboardLayout/>
                                </PrivateRoute>
                            }
                        >
                            <Route path="settings" element={<SettingsPage/>}/>
                            <Route path="assistants" element={<AssistantsPage/>}/>
                            <Route path="change-password" element={<ChangePasswordPage/>}/>
                            <Route path="subscription" element={<SubscriptionPage/>}/>
                            <Route path="logs" element={<div>Logs Page</div>}/>
                            <Route path="handbook" element={<div>Handbook Page</div>}/>
                            <Route index element={<Navigate to="settings" replace/>}/>
                        </Route>
                        <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
                    </Routes>
                </BrowserRouter>
                <GlobalStyles/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;