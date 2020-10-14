import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Course } from './course';
import { CourseService } from './course.service';


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

const ELEMENT_DATA: CourseComponent[] = [];


@Component({
  selector: 'app-course-list',
  styleUrls: ['./course-list.component.css'],
  templateUrl: './course-list.component.html',
})

export class CourseListComponent{
  displayedColumns: string[] = ['imageUrl', 'name','price', 'code', 'duration', 'rating', 'releaseDate'];
  dataSource = ELEMENT_DATA;

  constructor(private courseService: CourseService) {
    this.dataSource = this.courseService.retrieveAll()
  }
}


