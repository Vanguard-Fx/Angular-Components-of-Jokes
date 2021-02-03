import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barzelletta',
  templateUrl: './barzelletta.component.html',
  styleUrls: ['./barzelletta.component.scss']
})
export class BarzellettaComponent implements OnInit {

  @Input() titoloBarzelletta: string;
  @Input() contenutoBarzelletta: string[];

  @Output() onClickedOutput = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.onClickedOutput.emit(this.contenutoBarzelletta); //oppure creo un oggetto con titolo e contenuto
  }
}
