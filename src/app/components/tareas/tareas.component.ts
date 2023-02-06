import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit{
  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor(){
  }

  ngOnInit(): void{
  }

  agregarTarea(){

    //crear un objeto tarea
    const tarea: Tarea = {
      nombre : this.nombreTarea,
      estado : false
    }
    //Agregar el objeto tarea al array
    this.listTareas.push(tarea);
    //reset form
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void{
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number): void{
    this.listTareas[index].estado = !tarea.estado;
  }
}
