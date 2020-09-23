import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './gp-lib-safe-interaction-overview-config.component.html',
  styleUrls: ['./gp-lib-safe-interaction-overview-config.component.css']
})
export class SafeInteractionOverviewConfigComponent {
  @Input() config: any = {};
    constructor() {}

}
