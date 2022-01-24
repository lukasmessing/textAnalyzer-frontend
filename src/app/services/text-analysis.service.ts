import { Injectable } from '@angular/core';
import { TextAnalysis } from '../TextAnalysis';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {
  private apiUrl = 'http://localhost:8080/textAnalysis';

  constructor(private http: HttpClient) { }

  getTextAnalysis(inputText: string, mode: string): Observable<TextAnalysis> {
    const queryParams = new HttpParams().append("mode", mode).append("text", inputText)
    return this.http.get<TextAnalysis>(this.apiUrl, { params: queryParams });
  }
}
