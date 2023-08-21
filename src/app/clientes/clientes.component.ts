import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes = [
    { id: 1, nome: 'João', sobrenome: 'lula', cpf: '123.456.789-00', idade: 55, endereco: 'Rua A, 123' },
    { id: 2, nome: 'Maria', sobrenome: 'lucas', cpf: '987.654.321-00', idade: 70, endereco: 'Rua B, 456' },
    // ... adicione mais clientes
  ];
  clientesAcimaDe60: any[] = [];
  
  mostrarClientesAcimaDe60() {
    this.clientesAcimaDe60 = this.clientes.filter(cliente => cliente.idade > 60);
  }
}