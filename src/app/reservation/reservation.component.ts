import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  resas!:any[];
  resa:Reservation = new Reservation();

  constructor(private reservationService:ReservationService){
  }
  
  ngOnInit(): void {
    this.findAllReservations();
  }

  findAllReservations(){
    this.reservationService.findAll().subscribe(data => {this.resas = data});
  }
  saveReservation(){
    this.reservationService.save(this.resa).subscribe(
      () => {
        this.findAllReservations();
        this.resa = new Reservation();
      }
    )
  }
  deleteReservation(id:number){
    this.reservationService.delete(id).subscribe(
      () => {
        this.findAllReservations();
      }
    )
  }

}
