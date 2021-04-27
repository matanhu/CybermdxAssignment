import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PublicApisService } from 'src/app/services/public-apis.service';

@Component({
  selector: 'app-entries-page',
  templateUrl: './entries-page.component.html',
  styleUrls: ['./entries-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntriesPageComponent implements OnInit {

  public entries: Observable<Array<any>>;

  constructor(
    private publicApisService: PublicApisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.entries = this.publicApisService.entries;
    
    this.route.queryParams.subscribe(params => {
      const searchVal = params['title'];
      this.initData(searchVal);
    });
  }

  initData(searchVal: string) {
    this.publicApisService.getEntries(searchVal);
  }

}
