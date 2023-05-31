import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  public senhasGeral: number = 0;
  public senhasPrioritaria: number = 0;
  public senhasExame: number = 0;
  public senhasTotais: number = 0;
  public senhasArray: any = {
    'SG': [],
    'SP': [],
    'SE': []
  };

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

  novaSenha(tipo: string = '') {
    //230523-SP01
    var year = new Date().getFullYear().toString();
    var month = new Date().getMonth().toString();
    var day = new Date().getDay().toString();
    if (tipo == 'SG') {
      var senhaFormatada = year + month + day + '-' + tipo + (this.senhasArray.SG.length + 1);
      this.senhasArray.SE.push(senhaFormatada);
    }

    console.log(this.senhasArray);

  }

}
