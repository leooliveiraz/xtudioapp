import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/service/funcionario.service.';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  loading = false;
  lista = [];
  constructor(private service: FuncionarioService) { }

  ngOnInit() {
    this.loading = true;
    this.service.getAll().subscribe(result => {
      this.lista = result;
      this.loading = false;
    });
  }

}
