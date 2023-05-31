import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChamarService {
    
  public chamarGeral: number = 0;
  public chamarPrioritaria: number = 0;
  public chamarExame: number = 0;

  constructor() { }

  proximaSenha() {
    this.proximaSenha = this.proximaSenha;
    console.log("Proxima Senha: " + this.proximaSenha);
  }

  somaGeral() {
    this.chamarGeral = this.chamarGeral + 1;
    console.log("SG: " + this.chamarGeral);
  }

  somaPrioritaria() {
    this.chamarPrioritaria++; // Outro modo de pós-incremento
    console.log("SP: " + this.chamarPrioritaria);
  }

  somaExame() {
    this.chamarExame++;
    console.log("SE: " + this.chamarExame);
  }
}
