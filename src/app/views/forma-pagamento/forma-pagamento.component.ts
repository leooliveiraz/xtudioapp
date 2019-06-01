import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from 'src/app/service/forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css']
})
export class FormaPagamentoComponent implements OnInit {

  lista = [];
  constructor(private service: FormaPagamentoService) { }

  ngOnInit() {
    this.service.getAll().subscribe(result => {
      this.lista = result;
    });
  }

}
