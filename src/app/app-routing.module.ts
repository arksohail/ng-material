import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ButtonComponent } from './pages/button/button.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { DynamicColorsComponent } from './pages/dynamic-colors/dynamic-colors.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'buttons', component: ButtonComponent },
  { path: 'dynamic-color', component: DynamicColorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
