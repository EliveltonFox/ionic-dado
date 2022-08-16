import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dado = 0;
  constructor() { }
  async sortear() {
    for (let i = 0; i < 10; i++) {
      let numerosorteado = Math.random();
      this.dado = Math.floor(numerosorteado * 6 + 1);
      console.log(this.dado);
      await new Promise(f => setTimeout(f, 100));
    }
  }

}
