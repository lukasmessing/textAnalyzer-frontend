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

  submitText(data: { mode: string, text: string; analyzeMode: string; }) {
    this.resultView.getTextAnalysis(data.mode, data.text, data.analyzeMode);    
  }

}