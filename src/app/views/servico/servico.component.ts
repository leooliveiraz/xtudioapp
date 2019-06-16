import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  loading = false;
  servicos = [];
  constructor(private service : ServicoService) { }
  
  ngOnInit() {
    this.loading = true;
    this.service.getAll().subscribe(result => {
      this.servicos = result;
      this.loading = false;
    });
  }

}
