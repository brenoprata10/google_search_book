import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing-module';
import {HttpClientModule} from '@angular/common/http';
import {ConsultaComponent} from './views/consulta/consulta.component';
// Imports do PrimeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MensagemValidacaoComponent} from "./views/utils/mensagem-validacao/mensagem-validacao.component";
import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/components/common/messageservice';
import {GoogleBooksService} from "./services/google-books.service";
import {ISBNPipe} from "./pipes/ISBNPipe";


@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    MensagemValidacaoComponent,

    //Pipes
    ISBNPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Imports do PrimeNG
    ButtonModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    GrowlModule
  ],
  providers: [
    MessageService,
    GoogleBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
