import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToComponent } from './how-to/how-to.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InstallPromptComponent } from './install-prompt/install-prompt.component';

const routes: Routes = [
  { path: 'install', component: InstallPromptComponent },
  { path: 'how-to', component: HowToComponent },
  { path: '', component: CalculatorComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
