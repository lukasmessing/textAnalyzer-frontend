import { Injectable } from '@angular/core';
import { TextAnalysis } from '../TextAnalysis';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {
  readonly VOWELS = "vowels";
  readonly CONSONANTS = "consonants";
  readonly VOWELS_LIST = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  readonly apiUrl = 'http://localhost:8080/textAnalysis';

  textAnalysis!: TextAnalysis;

  constructor(private http: HttpClient) { }

  getTextAnalysis(mode: string, inputText: string, analyzeMode: string): Observable<TextAnalysis> { 
    var result: Observable<TextAnalysis> = new Observable<TextAnalysis>();
    if (mode === 'online') {
      result = this.getTextAnalysisOnline(inputText, analyzeMode);
    } else if (mode === 'offline') {
      result = this.getTextAnalysisOffline(inputText, analyzeMode);
    }
    return result;
  }

  getTextAnalysisOnline(inputText: string, mode: string): Observable<TextAnalysis> {
    const queryParams = new HttpParams().append("mode", mode).append("text", inputText)
    return this.http.get<TextAnalysis>(this.apiUrl, { params: queryParams });
  }

  getTextAnalysisOffline(inputText: string, mode: string): Observable<TextAnalysis> {
    var map = new Map<string, number>();
    if (inputText) {
      const chars = inputText.split('');
     
      for (var i = 0; i < chars.length; i++) {
        var char = chars[i].toUpperCase();
       
        if (mode === this.VOWELS) {
          if (this.VOWELS_LIST.includes(char)) {
            this.calculateCharactersCount(map, char);
          }
        } else {
          if (!this.VOWELS_LIST.includes(char)) {
            this.calculateCharactersCount(map, char);
          }
        }
      }
    }
    var result: TextAnalysis = { text: inputText, result: map, message: '' };
    return of(result);
  }

  calculateCharactersCount(map: Map<string, number>, char: string) {
    if (map.has(char)) {
      var num: number | undefined = map.get(char);
      if (typeof num === 'number') {
        num++;
        map.set(char, num);
      }
    } else {
      map.set(char, 1);
    }
  }
}
