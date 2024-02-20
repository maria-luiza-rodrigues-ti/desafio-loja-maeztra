export interface MenuItem {
  href: string;
  name: string;
}

export interface Menu {
  title: string;
  children: MenuItem[];
}

export interface FooterMenu {
  menus: Menu[];
}
