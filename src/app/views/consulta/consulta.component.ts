import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from "primeng/components/common/messageservice";
import {GoogleBooksService} from "../../services/google-books.service";

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  formGroup: FormGroup;
  resultadoConsulta: any;
  qtdItensPorPagina = 10;
  paginaAtual = 1;
  startIndex = 0;


  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private googleBooksService: GoogleBooksService) {}

  ngOnInit() {

    this.construirFormulario();

  }

  construirFormulario() {
    this.formGroup = this.fb.group({
      isbn: new FormControl(null, Validators.compose([Validators.pattern(/\d{11,13}/g),
        Validators.maxLength(13),
        Validators.minLength(11)])),
      titulo: new FormControl(null),
      autor: new FormControl(null),
      filtroLivroPago: new FormControl('partial', Validators.required),
    });
  }

  submit() {
    if (this.formGroup.invalid) {
      this.messageService.add({severity: 'error', summary: 'Formulário inválido', detail: 'Existem campos inválidos no formulário'});
      return;
    }

    this.consultarGoogleBooks();

  }

  consultarGoogleBooks() {
    this.googleBooksService.consultarPorISBN(this.formGroup.value, this.qtdItensPorPagina, this.startIndex)
      .subscribe((resultado: any) => {
        this.resultadoConsulta = resultado.items;
      });
  }

  anterior() {
    this.startIndex -= this.qtdItensPorPagina;
    this.paginaAtual--;
    this.consultarGoogleBooks();
  }

  proximo() {
    this.startIndex += this.qtdItensPorPagina;
    this.paginaAtual++;
    this.consultarGoogleBooks();
  }

  limparFormulario() {
    this.formGroup.reset();
  }

  // exemploRequisicaoSincrona() {
  //   this.requisicaoSincrona()
  //     .then(resolve => {
  //       this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=intitle=teste')
  //         .subscribe((resultado: any) => {
  //             this.resultadoConsulta = resultado;
  //         });
  //     });

    // Cuspir na cara do colega!
    //   this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=intitle=teste')
    //     .subscribe((resultado: any) => {
    //         this.resultadoConsulta = resultado;
    //     });
    //
    // setTimeout(() => {
    //   console.log(this.resultadoConsulta);
    // }, 1000);
  // }

  // requisicaoSincrona(): Promise {
  //   return new Promise((resolve) => {
  //     console.log("Início requisicao sincrona");
  //     return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=intitle=teste')
  //       .subscribe((resultado: any) => {
  //         return resolve(resultado);
  //       });
  //   });
  // }

}
