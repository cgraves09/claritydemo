import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { CheckoutBoxComponent } from './components/checkout-box/checkout-box.component';
import { SkillItemsComponent } from './components/skill-items/skill-items.component';
import { NgbdModalBasic } from './components/ngbd-modal-content/ngbd-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SkillItemComponent,
    CheckoutBoxComponent,
    SkillItemsComponent,
    NgbdModalBasic,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
