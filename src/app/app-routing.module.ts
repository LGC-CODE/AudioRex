import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ChatComponent } from './views/chat/chat.component';
import { ProfileComponent } from './views/users/profile/profile.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { AuthComponent } from './views/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { PlaylistComponent } from './views/users/playlist/playlist.component';
import { ManagementComponent } from './views/management/management.component';
import { UploadAudioComponent } from './views/management/upload-audio/upload-audio.component';
import { ChooseMediaTypeComponent } from './views/management/choose-media-type/choose-media-type.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: HomeComponent, data: { animation: 'anim-1' } },
  { path: 'users/:id', component: ProfileComponent, data: { animation: 'anim-3' } },
  { path: 'users/:id/playlist/:pid', component: PlaylistComponent, data: { animation: 'anim-3_1' } },
  {
    path: 'users/:id/mgt', component: ManagementComponent, data: { animation: 'anim-3_2' },
    children: [
      { path: '', redirectTo: 'choose-media-type', pathMatch: 'full' },
      { path: 'upload', component: UploadAudioComponent, data: { animation: 'anim-3_2-1' } },
      { path: 'choose-media-type', component: ChooseMediaTypeComponent, data: { animation: 'anim-3_2-2' } }
    ]
  },
  { path: 'chat', component: ChatComponent, data: { animation: 'anim-2' } },
  {
    path: 'auth', component: AuthComponent, data: { animation: 'anim-4' },
    children: [
      { path: 'login', component: LoginComponent, data: { animation: 'anim-4-1' } },
      { path: 'register', component: RegisterComponent, data: { animation: 'anim-4-2' } }
    ]
  },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
