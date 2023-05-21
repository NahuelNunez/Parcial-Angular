import { Component } from '@angular/core';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  
})
export class CrearComponent {
nuevoPosteo:string = '';
posts: string[] = [];
seleccionadoPostIndex: number | null = null;
crearPosteo(){

  this.posts.push(this.nuevoPosteo)
  
  console.log('Nuevo Posteo creado:',this.nuevoPosteo);
  this.nuevoPosteo= '';

  
}
editarPost(index: number) {
  this.seleccionadoPostIndex = index;
}
guardarPost() {
  this.seleccionadoPostIndex = null;
  console.log('Posteo editado:', this.posts);
}
}

