import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { VideosComponent } from './pages/contents/videos/videos.component';
import { PlaylistsComponent } from './pages/contents/playlists/playlists.component';
import { ShortsComponent } from './pages/contents/videos/shorts/shorts.component';
import { LongFormComponent } from './pages/contents/videos/long-form/long-form.component';

export const routes: Routes = [

  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path:'dashboard',
    component: DashboardComponent,
  },
  {
    path:'contents',
    component: ContentsComponent,
    children: [
     { path:'videos',
      component: VideosComponent,
      children: [
        { path:'shorts',
          component: ShortsComponent
        },
        { path:'long-form',
          component: LongFormComponent
        },
      ]
    },

    { path:'playlists',
      component: PlaylistsComponent
    },
    ]
  },
  {
    path:'analytics',
    component: AnalyticsComponent,
  },
  {
    path:'comments',
    component: CommentsComponent,
  },

];
