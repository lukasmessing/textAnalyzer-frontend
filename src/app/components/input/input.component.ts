import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() analyzeEvent: EventEmitter<{ mode: string, text: string, analyzeMode: string }> = new EventEmitter();
  mode!: string;
  analyzeMode!: string;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onSubmit(inputText: string) {
    if (inputText != null && this.analyzeMode != null) {
      this.analyzeEvent.emit({ mode: this.mode, text: inputText, analyzeMode: this.analyzeMode });
    }
  }

  onModeSelect(mode: string) {
    this.mode = mode;
  }

  onAnalyzeModeSelect(analyzeMode: string) {
    this.analyzeMode = analyzeMode;
  }

}

