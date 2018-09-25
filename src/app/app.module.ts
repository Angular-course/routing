import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {UserComponent} from './users/user/user.component';
import {FormsModule} from '@angular/forms';
import {ServersService} from './servers/servers.service';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ServersComponent,
        UsersComponent,
        ServerComponent,
        EditServerComponent,
        UserComponent,
        PageNoteFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [ServersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
