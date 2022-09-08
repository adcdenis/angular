import { ServidorI } from './../../../api/dstvInterfaces';
import { map } from 'rxjs/operators';
import { ServidorService } from './../../../service/servidor.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-servidor',
    templateUrl: './servidor.component.html',
    styleUrls: ['./servidor.component.scss'],
})
export class ServidorComponent implements OnInit {
    public listaServidores: Array<ServidorI> = [];

    public listaServidoresSelecionados: Array<ServidorI> = [];

    constructor(private servidorService: ServidorService) {}

    ngOnInit(): void {

        this.servidorService.listar().subscribe({
            next: (v) => (v: any) => (this.listaServidores = v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });

        // const primeiro: ServidorI = { id: "-NBPeQzXUecRF3LhoFKu",nome: 'Canuto2' };
        // this.excluir(primeiro);

    }

    public salvar() {
        const primeiro: ServidorI = { nome: 'Canuto' };
        this.servidorService.salvar(primeiro).subscribe({
            next: (v) => (v: any) => console.log(v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }

    public alterar(servidor : ServidorI) {

        this.servidorService.editar(servidor).subscribe({
            next: (v) => (v: any) => console.log(v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }

    public excluir(servidor : ServidorI) {

        this.servidorService.excluir(servidor).subscribe({
            next: (v) => (v: any) => console.log(v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
