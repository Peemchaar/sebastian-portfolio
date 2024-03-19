import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private currentPageSubject: BehaviorSubject<String|null>;
  public currentPage: Observable<String|null>;

  constructor() { 
    this.currentPageSubject = new BehaviorSubject<String|null>('');
    this.currentPage = this.currentPageSubject.asObservable();
  }

  public get currentPageValue(): String | null {
    return this.currentPageSubject.value;
  }

  public updateCurrentPage(page: String) {
    this.currentPageSubject.next(page);
  }
}
