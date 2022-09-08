import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ServidorI } from '../api/dstvInterfaces';

@Injectable({
    providedIn: 'root',
})
export class ServidorService {
    private url =
        'https://dstv-5b72b-default-rtdb.firebaseio.com/servidor';

    constructor(private http: HttpClient) {}

    public listar(): Observable<any> {
        return this.http.get(`${this.url}.json`).pipe(
            map((res: any, index) => {
                let listaServidores: Array<ServidorI> = [];
                //console.log('listaServidores: ', listaServidores);

                for (const id in res) {
                    //console.log('id: ', id);
                    //console.log('inserindo: ', res[id]);
                    const servidor : ServidorI = res[id];
                    servidor.id = id;
                    let i = listaServidores.push(servidor);
                    //console.log('listaServidores: ', listaServidores);
                    //console.log('i: ', i);
                }
                return listaServidores;
            })
        );
    }

    public salvar(servidor: ServidorI): Observable<any> {
        return this.http
            .post(`${this.url}.json`, servidor)
            .pipe(tap((res) => console.log(res)));
    }

    public excluir(servidor: ServidorI): Observable<any> {
        return this.http
            .delete(`${this.url}/${servidor.id}.json`)
            .pipe(tap((res) => console.log(res)));
    }

    public editar(servidor: ServidorI): Observable<any> {
        return this.http
            .put(`${this.url}/${servidor.id}.json`, servidor)
            .pipe(tap((res) => console.log(res)));
    }
}
