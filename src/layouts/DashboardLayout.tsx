import {Outlet} from 'react-router-dom';

import {Sidebar} from '@/components/dashboard/Sidebar';

import {Layout, Content} from './DashboardLayout.styles';

export const DashboardLayout = () => {
    return (
        <Layout>
            <Sidebar/>
            <Content>
                <Outlet/>
            </Content>
        </Layout>
    );
};