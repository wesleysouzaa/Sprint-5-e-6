import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  email = 'wesleysouza@brq.com.br'
  senha = '123456'
  typePass = 'password';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {

    this.router.navigate(['login'])

  }
  cadastrar() {

    alert('Cadastro concluído com sucesso!');
    console.log("Novo cadastro solicitado")
    console.log('email:', this.email);
    console.log('senha:', this.senha)

  }

}




