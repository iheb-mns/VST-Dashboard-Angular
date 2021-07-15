import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-globe',       class: '' },
    { path: '/hotels',        title: 'Hotels',            icon:'nc-bank', class: '' },
    { path: '/#/',        title: 'Evenements',            icon:'nc-calendar-60', class: '' },
    { path: '/#/',        title: 'Voyages',            icon:'nc-bus-front-12', class: '' },
    { path: '/#/',        title: 'Excurtions',            icon:'nc-compass-05', class: '' },
    { path: '/users',        title: 'Utilisateurs',            icon:'nc-single-02', class: '' },
    { path: '/reservations',        title: 'Reservations',            icon:'nc-bullet-list-67', class: '' },

    /*{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },*/

    //{ path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
