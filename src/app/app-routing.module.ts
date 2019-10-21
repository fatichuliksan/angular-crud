import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductAddComponent } from "./component/product-add/product-add.component";
import { ProductEditComponent } from "./component/product-edit/product-edit.component";
import { ProductGetComponent } from "./component/product-get/product-get.component";

const routes: Routes = [
  {
    path: "product/create",
    component: ProductAddComponent
  },
  {
    path: "edit/:id",
    component: ProductEditComponent
  },
  {
    path: "products",
    component: ProductGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
