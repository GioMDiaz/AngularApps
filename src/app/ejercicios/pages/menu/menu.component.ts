import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    scrollableItems: MenuItem[] = [];

    activeItem!: MenuItem;

    activeItem2!: MenuItem;

    constructor(private primengconfig: PrimeNGConfig){}

    ngOnInit() {

        this.primengconfig.ripple = true
        this.items = [
            { label: 'Comunication', icon: 'pi pi-fw pi-comments', routerLink: ['/menu/comunication'] },
            { label: 'Counter', icon: 'pi pi-fw pi-sliders-v', routerLink: ['/menu/counter'] },
            { label: 'Crud', icon: 'pi pi-fw pi-users', routerLink: ['/menu/crud'] },
            { label: 'Display', icon: 'pi pi-fw pi-sliders-v', routerLink: ['/menu/display'] },
            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/menu/external'] },
            { label: 'Search', icon: 'pi pi-fw pi-search', routerLink: ['/menu/search'] },
            { label: 'Switch', icon: 'pi pi-fw pi-sync', routerLink: ['/menu/switch'] },
        ];



        this.activeItem = this.items[0];


    }
}


