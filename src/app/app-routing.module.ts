import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { MobilePortfolioComponent } from './mobile-portfolio/mobile-portfolio.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'mobile', component: MobilePortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
