import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Course } from './course';


export interface CourseComponent{
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  code: string;
  duration: number;
  rating: number;
  releaseDate: string;
}

const ELEMENT_DATA: CourseComponent[] = [
  {
    id: 1,
    name: 'Agular: Form',
    imageUrl: '',
    price: 99.99,
    code: 'XLR-8725',
    duration: 120,
    rating: 4.5,
    releaseDate: 'November, 3, 2020',

  },
  {
    id: 2,
    name: 'Agular: HTTP',
    imageUrl: '',
    price: 99.99,
    code: 'XLR-8725',
    duration: 120,
    rating: 4.5,
    releaseDate: 'November, 3, 2020',

  }
];


@Component({
  selector: 'app-course-list',
  styleUrls: ['./course-list.component.css'],
  templateUrl: './course-list.component.html',
})

export class CourseListComponent{
  displayedColumns: string[] = ['id', 'name', 'imageUrl', 'price', 'code', 'duration', 'rating', 'releaseDate'];
  dataSource = ELEMENT_DATA;

}


