import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries-grid',
  templateUrl: './entries-grid.component.html',
  styleUrls: ['./entries-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntriesGridComponent implements OnInit {

  @Input() entriesList: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
