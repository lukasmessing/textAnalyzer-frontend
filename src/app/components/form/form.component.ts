import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ResultViewComponent } from '../result-view/result-view.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('resultView')
  resultView!: ResultViewComponent;

  constructor() { }

  ngOnInit(): void {
  }

  submitText(data: { text: string; mode: string; }) {
    this.resultView.getTextAnalysis(data.text, data.mode);    
  }

}