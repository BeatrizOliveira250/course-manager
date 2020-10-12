import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Course } from './course';


export interface CourseComponent{
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  code: string;
  duration: number;
  rating: number;
  releaseDate: string;
}

const ELEMENT_DATA: CourseComponent[] = [
  {
    id: 1,
    imageUrl: '/assets/images/forms.png',
    name: 'Angular-Form',
    price: 99.99,
    code: 'XLR-8725',
    duration: 120,
    rating: 4.5,
    releaseDate: 'November, 3, 2020',

  },
  {
    id: 2,
    imageUrl: '/assets/images/http.png',
    name: 'Agular-HTTP',
    price: 45.99,
    code: 'KJS-2398',
    duration: 90,
    rating: 4,
    releaseDate: 'November, 5, 2020',

  }
];


@Component({
  selector: 'app-course-list',
  styleUrls: ['./course-list.component.css'],
  templateUrl: './course-list.component.html',
})

export class CourseListComponent{
  displayedColumns: string[] = ['imageUrl', 'name','price', 'code', 'duration', 'rating', 'releaseDate'];
  dataSource = ELEMENT_DATA;

}


