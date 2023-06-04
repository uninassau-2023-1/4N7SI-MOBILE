import { Injectable } from '@angular/core';

//--------------------  MYSQL --------------------//
// import { createConnection, Connection } from 'mysql2/promise';

// async function connectToDatabase(): Promise<Connection> {
//   try {
//     const connection = await createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: '',
//       database: 'bancocontroleatendimento'
//     });

//     console.log('Conexão estabelecida com o banco de dados!');
//     return connection;
//   } catch (error) {
//     console.error('Erro ao conectar ao banco de dados:', error);
//     throw error;
//   }
// }

// async function testDatabaseConnection() {
//   try {
//     const connection = await connectToDatabase();
//     // Faça outras operações ou consultas no banco de dados aqui, se necessário
//     connection.end();
//   } catch (error) {
//     // Trate o erro ou exiba uma mensagem adequada aqui
//   }
// }

// testDatabaseConnection(); // Chamada da função de teste de conexão
//------------------------------------------------//

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public inputNovaSenha: string = '';
  public senhasArray: any = { 'SG': [], 'SP': [], 'SE': [] };
  public senhasChamadas: string[] = [];
  public tempoMedioGeral: number = 0;
  public tempoMedioPrior: number = 0;
  public tempoMedioExame: number = 0;

  constructor() { }

  // Somas: Geral, Prioritário, Exame
  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
    console.log("Senhas Geral: " + this.senhasGeral);
  }

  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
    console.log("Senha Prioritária: " + this.senhasPrior);
  }

  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
    console.log("Senha Exame: " + this.senhasExame);
  }

  // Calcula tempo de retenção para SP, SE e SG
  calcularTempoRetencao(tipoSenha: string): number {
    if (tipoSenha === 'SP') {
      const min = 10; // 15 minutos - 5 minutos
      const max = 20; // 15 minutos + 5 minutos
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (tipoSenha === 'SE') {
      const percentage = Math.random();
      if (percentage <= 0.05) {
        return 5; // 5 minutos para 5% dos SA
      } else {
        return 1; // 1 minuto para 95% dos SA
      }
    } else {
      const min = 2; // 5 minutos - 3 minutos
      const max = 8; // 5 minutos + 3 minutos
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  // Calcula tempo médio de atendimento
  calcularTempoMedio() {
    if (this.senhasGeral > 0) {
      this.tempoMedioGeral = Math.round(this.senhasArray.SG.reduce((sum: number, senha: string) => {
        return sum + this.calcularTempoRetencao('SG');
      }, 0) / this.senhasGeral);
    }

    if (this.senhasPrior > 0) {
      this.tempoMedioPrior = Math.round(this.senhasArray.SP.reduce((sum: number, senha: string) => {
        return sum + this.calcularTempoRetencao('SP');
      }, 0) / this.senhasPrior);
    }

    if (this.senhasExame > 0) {
      this.tempoMedioExame = Math.round(this.senhasArray.SE.reduce((sum: number, senha: string) => {
        return sum + this.calcularTempoRetencao('SE');
      }, 0) / this.senhasExame);
    }
  }

  // Emite nova senha formatada
  novaSenha(tipoSenha: string = '') {
    var year = new Date().getFullYear().toString().substring(2, 4);
    var month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    var day = new Date().getDate().toString().padStart(2, '0');
    let contador: number;
    let senha: string = '';

    // SENHA GERAL
    if (tipoSenha == 'SG') {
      this.somaGeral();
      contador = this.senhasGeral;
      senha = `${year}${month}${day}-${tipoSenha}${contador.toString().padStart(2, '0')}`;
      if (!this.senhasArray['SG']) {
        this.senhasArray['SG'] = [];
      }
      this.senhasArray['SG'].push(senha);
    // SENHA PRIORITÁRIA
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      contador = this.senhasPrior;
      senha = `${year}${month}${day}-${tipoSenha}${contador.toString().padStart(2, '0')}`;
      if (!this.senhasArray['SP']) {
        this.senhasArray['SP'] = [];
      }
      this.senhasArray['SP'].push(senha);
    // SENHA EXAME
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      contador = this.senhasExame;
      senha = `${year}${month}${day}-${tipoSenha}${contador.toString().padStart(2, '0')}`;
      if (!this.senhasArray['SE']) {
        this.senhasArray['SE'] = [];
      }
      this.senhasArray['SE'].push(senha);
    }

    this.inputNovaSenha = senha;
    console.log(this.senhasArray);
    this.calcularTempoMedio();
  }
}
