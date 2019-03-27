import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "member", component: MemberListComponent },
  { path: "messages", component: MessagesComponent },
  { path: "lists", component: ListsComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
