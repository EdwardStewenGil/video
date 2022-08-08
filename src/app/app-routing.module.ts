import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceboockComponent } from '../app/faceboock/faceboock.component';
import { InstagramComponent } from '../app/instagram/instagram.component';
import { YotubeComponent } from '../app/yotube/yotube.component';
import { InicioComponent } from '../app/inicio/inicio.component';
import { YotubeauComponent } from '../app/yotubeau/yotubeau.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';








const routes: Routes = [
  { path: '', component: LoginComponent,},
  { path: 'faceboock', component: FaceboockComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'instagram', component: InstagramComponent },
  { path: 'youtube', component: YotubeComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
