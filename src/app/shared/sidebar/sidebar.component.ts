import { Component, OnInit } from '@angular/core';

import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  items: any[] = [];
  constructor(private sidebarService: SidebarService ) { }

  ngOnInit(): void {
    this.items = this.sidebarService.menu
  }

}
