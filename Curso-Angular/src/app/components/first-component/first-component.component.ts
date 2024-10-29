import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{
  name: string = 'Jõao';
  age: number = 30;
  job = 'Programador';
  constructor() {}

  ngOnInit(): void {
    
  }


}
