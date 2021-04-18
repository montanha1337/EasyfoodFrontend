import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AppRoutesModule } from './app.routes'
import { AppComponent } from './app.component'

// layout
import { HeaderComponent } from './shared/layout/header/header.component'

// components
import { ComponentsModule } from './components/components.module'

// pages
import { HomeComponent } from './pages/home/home.component'
import { MobileMenuComponent } from './shared/layout/mobile-menu/mobile-menu.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FoodComponent } from './pages/food/food.component'


@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, MobileMenuComponent, FoodComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    AppRoutesModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
