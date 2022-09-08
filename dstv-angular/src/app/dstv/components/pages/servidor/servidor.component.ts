import { ServidorI } from './../../../api/dstvInterfaces';
import { ServidorService } from './../../../service/servidor.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-servidor',
    templateUrl: './servidor.component.html',
    styleUrls: ['./servidor.component.scss'],
    providers: [MessageService],
})
export class ServidorComponent implements OnInit {
    public listaServidores: Array<ServidorI> = [];
    public listaServidoresSelecionados: Array<ServidorI> = [];
    public dialogoExcluir: boolean = false;
    public servidorSelecionado: ServidorI = {};
    cols: any[] = [];

    constructor(
        private servidorService: ServidorService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        console.log('aqui');

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'nome', header: 'Nome' },
        ];

        this.servidorService.listar().subscribe({
            next: (v) => (this.listaServidores = v),
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

    public alterar(servidor: ServidorI) {
        this.servidorService.editar(servidor).subscribe({
            next: (v) => (v: any) => console.log(v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }

    public abrirDialogExcluir(servidor: ServidorI) {
        this.servidorSelecionado = servidor;
        this.dialogoExcluir = true;
    }

    public excluir() {
        this.servidorService.excluir(this.servidorSelecionado).subscribe({
            next: (v) => (v: any) => console.log(v),
            error: (e) => console.error(e),
            complete: () => {
                console.info('complete');
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Servidor Excluído',
                    life: 3000,
                });

                this.servidorSelecionado = {};
                this.dialogoExcluir = false;

                this.servidorService.listar().subscribe({
                    next: (v) => (this.listaServidores = v),
                    error: (e) => console.error(e),
                    complete: () => console.info('complete'),
                });
            },
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }

    public novo() {}

    public excluirSelecionados() {}
}
