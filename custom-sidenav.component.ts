import { Component, computed, Input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuItemComponent } from "../menu-item/menu-item.component";


export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
}


@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatListModule, MenuItemComponent],
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.scss']
})

export class CustomSidenavComponent {

  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean){
      this.sidenavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'video_library', label: 'Content', route: 'contents',
      subItems: [
      {icon: 'play_circle', label: 'Videos', route: 'videos',subItems: [
        {icon: 'movies', label: 'Shorts', route: 'shorts'},
        {icon: 'tv', label: 'Long Form', route: 'long-form'},
      ]},
      {icon: 'playlist_play', label: 'Playlists', route: 'playlists'},
    ]
  },
    { icon: 'analytics', label: 'Analytics', route: 'analytics' },
    { icon: 'comment', label: 'Comments', route: 'comments' },
  ]);

  profilePicSize = computed(() => this.sidenavCollapsed() ? '32' : '100')

}
