import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenuto',
  templateUrl: './contenuto.component.html',
  styleUrls: ['./contenuto.component.scss']
})
export class ContenutoComponent implements OnInit {
  @Input() contenuto: string[];

  constructor() { }

  ngOnInit(): void {
  }
}
