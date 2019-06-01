import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/service/funcionario.service.';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  lista = [];
  constructor(private service: FuncionarioService) { }

  ngOnInit() {
    this.service.getAll().subscribe(result => {
      this.lista = result;
    });
  }

}
