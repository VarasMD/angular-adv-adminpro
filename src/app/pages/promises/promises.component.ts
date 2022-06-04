import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then( data => console.log(data))
    //Definicion de promesa
    // const promise = new Promise((resolve, reject) => {
    //   if (true) {
    //     resolve('Hola, salio bien')
    //   } else {
    //     reject('Algo salio mal')
    //   }
    // })

    // promise.then((mensaje) => {
    //   console.log(mensaje)
    // }).catch((error) => {
    //   console.log('UPSS...', error)
    // })
  }

  getUsers(): Promise<any> {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    })
  }

}
