import { Component } from '@angular/core';
import { EquipoService } from './equipo.service';
import { Equipo } from './equipo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-torneo';

  equipo: Equipo[];
  private equipoService: EquipoService;
  isHabilitado: boolean = true;
  
  constructor(equipoService: EquipoService){
  	this.equipoService = equipoService;
  }

  listarEquipos(): void {
  	this.equipoService.getEquipos().subscribe
  	(
  		(equipo) => {
  			this.equipo = equipo;
  		}
  	);
  }

  habilitar(): void{
    if(this.isHabilitado){
      this.isHabilitado=false;
    }else{
      this.isHabilitado=true;
    }
  }
}
