import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  servicos = [];
  constructor(private service : ServicoService) { }

  ngOnInit() {
    this.service.getServicos().subscribe(result => {
      this.servicos = result;
    });
  }

}
