import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private currentPageSubject: BehaviorSubject<String|null>;
  public currentPage: Observable<String|null>;

  private disolveSubject: BehaviorSubject<Boolean|null>;
  public startDisolve: Observable<Boolean|null>;

  constructor() { 
    this.currentPageSubject = new BehaviorSubject<String|null>('');
    this.currentPage = this.currentPageSubject.asObservable();

    this.disolveSubject = new BehaviorSubject<Boolean|null>(false);
    this.startDisolve = this.disolveSubject.asObservable();
  }

  public get currentPageValue(): String | null {
    return this.currentPageSubject.value;
  }

  public updateCurrentPage(page: String) {
    this.currentPageSubject.next(page);
  }

  public get currentDisolveValue(): Boolean | null {
    return this.disolveSubject.value;
  }

  public updateDisolveState(value: Boolean) {
    this.disolveSubject.next(value);
  }
}
