import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { PublicApisService } from 'src/app/services/public-apis.service';

@Component({
  selector: 'app-search',
  template: `
    <input placeholder="Search" #input>
  `,
  styles: [`
    input {
      width: 350px;
      border: 1px solid;
      border-radius: 20px;
      height: 35px;
      padding: 10px;
      transition: all .35s;
    }

    input:focus {
      outline: none;
      transform: translateY(3px);
      box-shadow: 5px 5px 5px rgb(0 0 0 / 50%);
    }
  `]
})
export class SearchComponent implements OnInit {

  @ViewChild('input') input: ElementRef;

  constructor(
    private publicApisService: PublicApisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap((ev: any) => {
          this.publicApisService.getEntries(ev.target.value);
        })
      )
      .subscribe();

    this.route.queryParams.subscribe(params => {
      this.input.nativeElement.value = params['title'] || '';
    });
  }

}
