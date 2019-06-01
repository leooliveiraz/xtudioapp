import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicoService } from 'src/app/service/servico.service';
import { MzToastService } from 'ngx-materialize';
import {  Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  private subscribe;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: ServicoService,
              private toastService: MzToastService) {
                this.createForm();
               }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
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
      this.subscribe = this.service.getServico(id).subscribe( res => {
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
          this.toastService.show('Serviço salvo', 1000);
          this.router.navigate(['/servico']);
        }
      );
    } else {
      this.service.inserir(this.form.value).subscribe( 
        res => {
          this.toastService.show('Serviço salvo', 1000);
          this.router.navigate(['/servico']);
        }
      );
    }
  }
}
