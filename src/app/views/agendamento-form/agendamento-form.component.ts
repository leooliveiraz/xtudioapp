import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormaPagamentoService } from 'src/app/service/forma-pagamento.service';
import { MzToastService } from 'ngx-materialize';
import { AgendamentoService } from 'src/app/service/agendamento.service';
import { FuncionarioService } from 'src/app/service/funcionario.service.';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})
export class AgendamentoFormComponent implements OnInit {

  public form: FormGroup =  this.formBuilder.group({});
  formasPagamento: any[] = [];
  funcionarios: any[] = [];
  servicos: any[] = [];
  construido = false;
  servicosSelecionados: any[] = [];

  public options: Pickadate.DateOptions = {
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 
                'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    clear: 'Limpar', // Clear button text
    close: 'Ok',    // Ok button text
    today: 'Hoje', // Today button text
    closeOnClear: true,
    closeOnSelect: false,
    format: 'dd/mm/yyyy', // Visible date format (defaulted to formatSubmit if provided otherwise 'd mmmm, yyyy')
    formatSubmit: 'yyyy-mm-dd',   // Return value format (used to set/get value)
    selectMonths: false, // Creates a dropdown to control month
    selectYears: false,    // Creates a dropdown of 10 years to control year,
  };

  public timepickerOptions: Pickadate.TimeOptions = {
    default: 'Agora', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Limpar', // text for clear-button
    canceltext: 'Cancelar', // Text for cancel-button
    autoclose: true, // automatic close timepicker
    ampmclickable: false, // make AM PM clickable
  };

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private agendamentoService: AgendamentoService,
    private formaPagamentoService: FormaPagamentoService,
    private funcionarioService: FuncionarioService,
    private servicoService: ServicoService,
    private toastService: MzToastService) {
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.agendamentoService.get(id).subscribe(res => {
        const obj: any = res;
        this.construido = false;
        this.servicosSelecionados = obj.servicos;
        for(let i = 0; i < this.servicosSelecionados.length; i++){
          this.servicosSelecionados[i] = this.servicosSelecionados[i].id;
        }
        this.form = this.formBuilder.group({
          id: [obj.id],
          cliente: [obj.cliente, Validators.required],
          data: [obj.data, Validators.required],
          horaInicial: [obj.horaInicial, Validators.required],
          horaFinal: [obj.horaFinal, Validators.required],
          funcionario: [obj.funcionario.id, Validators.required],
          servicos: [this.servicosSelecionados, Validators.required],
          valor: [obj.valor, Validators.required],
          formaPagamento: [obj.formaPagamento.id, Validators.required],
          pago: [obj.pago, Validators.required],
          anamnese: [obj.anamnese, Validators.required],
          confirmado: [obj.confirmado, Validators.required],
          excluido: [obj.excluido]
        });
        this.carregar();
        this.construido = true;
      });
    } else {
      this.form = this.formBuilder.group({
        id: [null],
        cliente: ['', Validators.required],
        data: ['', Validators.required],
        horaInicial: ['', Validators.required],
        horaFinal: ['', Validators.required],
        valor: ['', Validators.required],
        formaPagamento: [null, Validators.required],
        funcionario: [null, Validators.required],
        servicos: [null, Validators.required],
        pago: [false, Validators.required],
        anamnese: [false, Validators.required],
        confirmado: [false, Validators.required],
        excluido: [false]
      });
      this.carregar();
      this.construido = true;
    }
  }

  carregar(){
    this.formaPagamentoService.getAll().subscribe(res =>{
      this.formasPagamento = res as any[];
    });
    this.funcionarioService.getAll().subscribe(res =>{
      this.funcionarios = res as any[];
    });
    this.servicoService.getAll().subscribe(res =>{
      this.servicos = res as any[];
    });
  }
  salvar() {
    if (this.form.invalid) {
      return;
    }
    if (this.form.value.id) {
      this.agendamentoService.alterar(this.form.value).subscribe(
        res => {
          this.toastService.show('Agendamento salvo', 300);
          this.router.navigate(['/agendamento']);
        }
      );
    } else {
      this.agendamentoService.inserir(this.form.value).subscribe(
        res => {
          this.toastService.show('Agendamento salvo', 300);
          this.router.navigate(['/agendamento']);
        }
      );
    }
  }

  servicoNaListaSelecionado(servico) {
    let encontrado = false;
    for(let i = 0; i < this.servicosSelecionados.length; i++){
      if(servico.id === this.servicosSelecionados[i].id){
        encontrado = true;
        break;
      }
    }
    console.log(`${encontrado} ${servico.nome}`)
    return encontrado;
  }
}
