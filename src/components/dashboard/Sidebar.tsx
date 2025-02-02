import {BaseLogoWhite, AssistantLabTitleWhite} from "@/assets/Logos.tsx";
import {SidebarContainer, Logo, NavItem} from "./Sidebar.styles";

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <Logo>
                <BaseLogoWhite/>
                <AssistantLabTitleWhite/>
            </Logo>
            <nav>
                <NavItem to="/dashboard/settings">Мои настройки</NavItem>
                <NavItem to="/dashboard/assistants">Мои ассистенты</NavItem>
                <NavItem to="/dashboard/logs">Логи</NavItem>
                <NavItem to="/dashboard/handbook">Справочник</NavItem>
            </nav>
        </SidebarContainer>
    );
};