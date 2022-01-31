import { Component, OnInit } from '@angular/core';
import { TextAnalysisService } from 'src/app/services/text-analysis.service';
import { TextAnalysis } from 'src/app/TextAnalysis';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {
  textAnalysis = <TextAnalysis>{};

  constructor(private textAnalysisService: TextAnalysisService) { }

  ngOnInit(): void {
  }

  getTextAnalysis(mode: string, inputText: string, analyzeMode: string) {
    this.textAnalysisService
      .getTextAnalysis(mode, inputText, analyzeMode)
      .subscribe((TextAnalysis) => this.textAnalysis = TextAnalysis);
  }

}
