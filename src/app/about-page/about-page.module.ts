import {NgModule} from "@angular/core";
import {AboutPageComponent} from "./about-page.component";
import {AboutExtraPageComponent} from "./about-extra-page/about-extra-page.component";
import {PageNamePipe} from "../shared/page-name.pipe";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AboutPageComponent, children: [
          {path: 'extra', component: AboutExtraPageComponent}
        ]
      }
    ])
  ]
})
export class AboutPageModule {
}
