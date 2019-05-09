import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "", // localhost:4200/members
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {
        path: "members",
        component: MemberListComponent,
        resolve: {
          users: MemberListResolver
        }
      },
      {
        path: "members/:id",
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver }
      },
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent }
    ]
  },

  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
