import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

// Own
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafeDomPipe } from './safe-dom.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';

/**
 * Shared Module.
 * Includes elements used in many places of the app.
 */
@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    SafeDomPipe,
    SpinnerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Material
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    SafeDomPipe,
    SpinnerComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
