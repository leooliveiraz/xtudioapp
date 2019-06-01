import { FormaPagamentoService } from './../../service/forma-pagamento.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicoService } from 'src/app/service/servico.service';
import { MzToastService } from 'ngx-materialize';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-form',
  templateUrl: './forma-pagamento-form.component.html',
  styleUrls: ['./forma-pagamento-form.component.css']
})
export class FormaPagamentoFormComponent implements OnInit {

    public form: FormGroup;
    private subscribe;
    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private service: FormaPagamentoService,
                private toastService: MzToastService) {
                  this.createForm();
                 }
  
    ngOnInit() {
    }
  
    createForm() {
      const id = this.activatedRoute.snapshot.paramMap.get("id");
      if(id == null){
        this.form = this.formBuilder.group({
          id: [null],
          nome: ['', Validators.required],
          excluido: [false]
        });
      } else {
        this.service.get(id).subscribe( res => {
          const obj:any = res;
          this.form = this.formBuilder.group({
            id: [obj.id],
            nome: [obj.nome, Validators.required],
            excluido: [obj.excluido]
          });
          }
        )
      }
    }
  
    salvar(){
      if (this.form.invalid) {
        return;
      }
      console.log();
      if(this.form.value.id){
        this.service.alterar(this.form.value).subscribe( 
          res => {
            this.toastService.show('Forma de Pagamento salva', 300 );
            this.router.navigate(['/formapagamento']);
          }
        );
      } else {
        this.service.inserir(this.form.value).subscribe( 
          res => { 
            this.toastService.show('Forma de Pagamento salva', 300 );
            this.router.navigate(['/formapagamento']);
          }
        );
      }
    }
}
