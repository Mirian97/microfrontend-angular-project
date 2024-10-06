import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'publisher/:id',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        remoteName: 'mfeApp',
        exposedModule: './PublisherDetailModule',
      })
        .then((m) => m.PublisherDetailModule)
        .catch((err) => console.error(err)),
  },
  {
    path: 'publisher',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        remoteName: 'mfeApp',
        exposedModule: './PublisherModule',
      })
        .then((m) => m.PublisherModule)
        .catch((err) => console.error(err)),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
