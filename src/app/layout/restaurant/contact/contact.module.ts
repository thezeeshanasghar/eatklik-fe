import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { PageHeaderModule } from 'src/app/shared';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent, AddComponent],
  imports: [CommonModule, ContactRoutingModule, PageHeaderModule, FormsModule]
})
export class ContactModule {}
