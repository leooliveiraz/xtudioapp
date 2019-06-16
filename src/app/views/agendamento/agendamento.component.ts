import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/service/agendamento.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  loading = false;
  lista = [];
  constructor(private service: AgendamentoService) { }

  ngOnInit() {
    this.loading = true;
    this.service.getAll().subscribe(result => {
      this.lista = result;
      this.loading = false;
    });
  }

}
