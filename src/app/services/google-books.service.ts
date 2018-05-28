import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class GoogleBooksService {

  constructor(private httpClient: HttpClient) {}

  consultarPorISBN(formValue: any, qtdItensPagina: number, startIndex: number) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('q=', `${this.getISBNParam(formValue.isbn)}${this.getAutorParam(formValue.autor)}${this.getTituloParam(formValue.titulo)}`);
    httpParams = httpParams.append('startIndex', startIndex.toString());
    httpParams = httpParams.append('maxResults', qtdItensPagina.toString());
    return this.httpClient.get('https://www.googleapis.com/books/v1/volumes', {params: httpParams});
  }

  getISBNParam(isbn: string) {
    return isbn ? `isbn:${isbn}` : '';
  }

  getAutorParam(autor: string) {
    return autor ? `,inauthor:${autor}` : '';
  }

  getTituloParam(titulo: string) {
    return titulo ? `,intitle:${titulo}` : '';
  }

}
