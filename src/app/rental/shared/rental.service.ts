import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable ()
export class RentalService {

    private rentals: Rental[] = [{
        id: "1",
        title: "Central Apartment 1",
        city: "Manchester",
        street: "476 Cortequay Ct.",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        descritpion: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: "2",
        title: "Central Apartment 2",
        city: "New York",
        street: "Times Square",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 7,
        descritpion: "Its just OK",
        dailyRate: 3400,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: "3",
        title: "Central Apartment 3",
        city: "San Francisco",
        street: "Main Street",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 8,
        descritpion: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: "4",
        title: "Central Apartment 4",
        city: "Bratislava",
        street: "Hlavana",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 9,
        descritpion: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      }];



      public getRentalByID(rentalID: string): Observable<Rental> {

        return new Observable<Rental>((observer) => {
        
            setTimeout(() => {
                const foundRental = this.rentals.find((rental) => {
                    return rental.id == rentalID;
                });
                observer.next(foundRental);
            },500);
        });
      }





    public getRentals():  Observable<Rental[]> {

        return new Observable<Rental[]>((observer) => {
           
            setTimeout(() => {
                observer.next(this.rentals);
            }, 1000);
        }); 
    }
}