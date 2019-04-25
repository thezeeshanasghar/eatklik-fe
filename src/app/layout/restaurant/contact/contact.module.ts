import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, PageHeaderModule]
})
export class ContactModule {}
