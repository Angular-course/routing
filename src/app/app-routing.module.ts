import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './home/home.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerComponent} from './servers/server/server.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {PageNoteFoundComponent} from './page-note-found/page-note-found.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {
        path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
            {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
            {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
        ]
    },
    {
        path: 'users', canActivateChild: [AuthGuard], component: UsersComponent, children: [
            {path: ':id/:name', component: UserComponent}
        ]
    },
    // {path: 'not-found', component: PageNoteFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
