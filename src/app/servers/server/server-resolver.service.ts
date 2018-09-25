import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ServersService} from '../servers.service';
import {Injectable} from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()

export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {
    }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot,
            routerStateSnapshot: RouterStateSnapshot): Observable<Server> |
        Promise<Server> | Server {
        return this.serversService.getServer(+activatedRouteSnapshot.params['id']);
    }
}

