
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MzToastService } from 'ngx-materialize';
import {  Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from 'src/app/service/funcionario.service.';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {


  public form: FormGroup;
  private subscribe;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: FuncionarioService,
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
          this.toastService.show('Funcionário salvo', 300 );
          this.router.navigate(['/funcionario']);
        }
      );
    } else {
      this.service.inserir(this.form.value).subscribe( 
        res => { 
          this.toastService.show('Funcionário salvo', 300 );
          this.router.navigate(['/funcionario']);
        }
      );
    }
  }
}
