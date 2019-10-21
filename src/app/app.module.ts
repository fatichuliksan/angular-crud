import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//third party
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

//module
import { AppRoutingModule } from "./app-routing.module";
//component
import { AppComponent } from "./app.component";
import { ProductAddComponent } from "./component/product-add/product-add.component";
import { ProductEditComponent } from "./component/product-edit/product-edit.component";
import { ProductGetComponent } from "./component/product-get/product-get.component";
//service
import { ProductsService } from './service/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductGetComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
