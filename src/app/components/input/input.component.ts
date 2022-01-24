import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() analyzeEvent: EventEmitter<{ text: string, mode: string }> = new EventEmitter();
  mode!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(inputText: string) {
    if (inputText != null && this.mode != null) {
      this.analyzeEvent.emit({ text: inputText, mode: this.mode });
    }
  }

  onModeSelect(mode: string) {
    this.mode = mode;
  }
}
