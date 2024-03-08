import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private APIKey: string = '0dMSpigaRKf0Iy5OOR5dcbQ608ZqhHmC';
  private _tagsHistory: string[] = [];
  public  gifList: Gifs[] = [];

  constructor(private http: HttpClient){
    this.getLocalStorage();
    if(this._tagsHistory[0] != null){
      this.searchTag(this._tagsHistory[0]);
    }
  }

  get tagHistory(){
    return [...this._tagsHistory];
  }

  searchTag(tag: string):void{
    if(tag.length === 0) return;
    if(tag !== ' ') this.addTagToHiustory(tag);

    const params = new HttpParams()
    .set('api_key', this.APIKey)
    .set('limit', 20)
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe(resp =>
      this.gifList = resp.data
      );

  }

  private addTagToHiustory(tag:string){
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    if(this._tagsHistory[0] !== ' '){
      localStorage.setItem('tagHistory', JSON.stringify(this._tagsHistory));
    }
    }

  private getLocalStorage():void{
    let historyLocalStorage: string;
    if(localStorage.getItem('tagHistory') !== null){
      historyLocalStorage = localStorage.getItem('tagHistory')!;
      this._tagsHistory = JSON.parse(historyLocalStorage);
    }

  }

  public clearLocalStorage():void{
    let historyLocalStorage: string;
    if(localStorage.getItem('tagHistory') !== null){
      localStorage.removeItem('tagHistory');
      this._tagsHistory = [];
      this.searchTag(' ');
    }

  }

}
