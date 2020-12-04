import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  @Input() description : string;
  @Output() descriptionChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  change(nouvelleValeur) {
    this.descriptionChange.emit(nouvelleValeur);
  }

}
