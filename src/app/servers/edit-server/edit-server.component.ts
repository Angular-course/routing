import {Component, OnInit} from '@angular/core';
import {ServersService} from '../servers.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
    server: { id: number, name: string, status: string };
    serverName = '';
    serverStatus = '';
    allowEdit = false;

    constructor(private serversService: ServersService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const id = +this.activatedRoute.snapshot.params['id'];
        this.activatedRoute.queryParams.subscribe(
            (queryParams: Params) => {
                this.allowEdit = queryParams['allowEdit'] === '1';
                console.log(this.allowEdit);
            }
        );
        this.server = this.serversService.getServer(id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    }

}
