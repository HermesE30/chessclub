interface MenuItemProps {
    id: string;
    route: string;
    name: string;
}

interface MenuProps {
    items?: Array<MenuItemProps>;
}