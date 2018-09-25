import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './home/home.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerComponent} from './servers/server/server.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {PageNoteFoundComponent} from './page-note-found/page-note-found.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {
        path: 'servers', component: ServersComponent, children: [
            {path: ':id', component: ServerComponent},
            {path: ':id/edit', component: EditServerComponent}
        ]
    },
    {
        path: 'users', component: UsersComponent, children: [
            {path: ':id/:name', component: UserComponent}
        ]
    },
    {path: 'not-found', component: PageNoteFoundComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
