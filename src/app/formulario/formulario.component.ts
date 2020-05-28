import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	model: Equipo = {codigoEquipo: 0,
		nombreEquipo:'', 
		numeroJugadores: 0, 
		partidosJugados: 0,
		partidosGanados: 0,
    	partidosPerdidos: 0,
    	partidosEmpatados: 0,
    	golesFavor: 0,
    	golesContra: 0,
    	diferenciaGol: 0,
    	puntos: 0};

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
  	this.equipoService.postEquipo(this.model).subscribe((Response: Equipo) => console.log(Response));
  }


}
