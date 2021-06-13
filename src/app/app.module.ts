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
import { MatMenuModule } from '@angular/material/menu'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { matTabsAnimations, MatTabsModule } from '@angular/material/tabs'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDialogModule } from '@angular/material/dialog'
import { MatStepperModule } from '@angular/material/stepper'
import { MatBadgeModule } from '@angular/material/badge'
import { MatListModule } from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'


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
import { AdminLoginComponent } from './admin/admin-login/admin-login.component'
import { MinhaContaComponent } from './pages/account/minha-conta/minha-conta.component'
import { MeusPedidosComponent } from './pages/account/meus-pedidos/meus-pedidos.component'
import { LoginComponent } from './pages/login/login.component'
import { CheckoutComponent } from './pages/checkout/checkout.component'


@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, MobileMenuComponent,
    FoodComponent, AdminLoginComponent, MinhaContaComponent, MeusPedidosComponent, LoginComponent, CheckoutComponent],
  imports: [
    MatGridListModule,
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
    MatMenuModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatStepperModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
