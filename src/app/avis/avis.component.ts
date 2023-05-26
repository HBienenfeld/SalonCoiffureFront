import { Component, OnInit } from '@angular/core';
import { Avis } from '../models/avis';
import { AvisService } from '../services/avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit{

  advices!:any[];
  advice:Avis = new Avis();

  constructor(private avisService:AvisService){
  }
  
  ngOnInit(): void {
    this.findAllAvis();
  }

  findAllAvis(){
    this.avisService.findAll().subscribe(data => {this.advices = data});
  }
  saveAvis(){
    this.avisService.save(this.advice).subscribe(
      () => {
        this.findAllAvis();
        this.advice = new Avis();
      }
    )
  }
  deleteAvis(id:number){
    this.avisService.delete(id).subscribe(
      () => {
        this.findAllAvis();
      }
    )
  }


}
