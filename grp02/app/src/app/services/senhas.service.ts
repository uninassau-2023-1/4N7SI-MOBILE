import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  public senhasGeral: number = 0;
  public senhasPrioritaria: number = 0;
  public senhasExame: number = 0;
  public senhasTotais: number = 0;

  constructor() { }

  somaGeral() {
    this.senhasGeral = this.senhasGeral + 1;
    this.senhasTotais++;
    console.log("Senhas Geral: " + this.senhasGeral);
  }

  somaPrioritaria() {
    this.senhasPrioritaria++; // Outro modo de pós-incremento
    this.senhasTotais++;
    console.log("Senha Prioritária: " + this.senhasPrioritaria);
  }

  somaExame() {
    this.senhasExame++;
    this.senhasTotais++;
    console.log("Senha Exame: " + this.senhasExame);
  }
}


