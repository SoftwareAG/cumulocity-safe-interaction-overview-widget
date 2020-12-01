/**
 * Copyright (c) 2020 Software AG, Darmstadt, Germany and/or its licensors
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { GpSafeInteractionOverviewService } from './gp-safe-interaction-overview.service';
import { from, Subject } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';
import { InventoryService } from '@c8y/client';

@Component({
  selector: 'lib-gp-safe-interaction-overview',
  templateUrl: './gp-safe-interaction-overview.component.html'
})
export class GpSafeInteractionOverviewComponent implements OnInit {
  @Input() config;
  response: any;
  dataLoaded: any;
  realtimeState = true;
  unsubscribeRealTime$ = new Subject<void>();
  constructor(
    public overviewService: GpSafeInteractionOverviewService,
    public inventory: InventoryService) { }

    async ngOnInit() {
      this.response = await this.overviewService.fetchTagsList(
        this.config.device.id
      );
      this.response.nonopt =
        this.response.totalcount -
        (this.response.available + this.response.assigned);
      this.handleRealtime(true);
      this.dataLoaded = Promise.resolve(true);
    }
    async refresh() {
      if (this.realtimeState) {
        this.unsubscribeRealTime$.next();
        this.realtimeState = false;
        this.response = await this.overviewService.fetchTagsList(
          this.config.device.id
        );
        this.response.nonopt =
          this.response.totalcount -
          (this.response.available + this.response.assigned);

        this.realtimeState = true;
        this.handleRealtime(true);
      } else {
        this.response = await this.overviewService.fetchTagsList(
          this.config.device.id
        );
        this.response.nonopt =
          this.response.totalcount -
          (this.response.available + this.response.assigned);
      }
      this.dataLoaded = Promise.resolve(true);
    }
    async handleRealtime(isInit) {
      // Get Group selected on the config
      const inventory = (await this.inventory.detail(this.config.device.id)).data;

      // Check that the response is a Group and not a device
      if (inventory.hasOwnProperty('c8y_IsDevice')) {
        alert('Please select a group for this widget to fuction correctly');
      } else {

        // Get List of devices
        const devicesAll = inventory.childAssets.references;
        const x = devicesAll.map(async (device) => {
          const inventorychildAssets = from(
            // tslint:disable-next-line: deprecation
            this.inventory.detail$(device.managedObject.id, {
              hot: true,
              realtime: true,
            })
          )
            .pipe(skip(isInit ? 1 : 0)) // skiping first instance since we already get latest data from init call
            .pipe(takeUntil(this.unsubscribeRealTime$))
            .subscribe(async (data) => {
              console.log('realtime worked');
              const childDevice = data[0];
              this.response = this.overviewService.fetchResult(childDevice);
              this.response.nonopt =
                this.response.totalcount -
                (this.response.available + this.response.assigned);
            });
        });
      }
    }
    toggle() {
      this.realtimeState = !this.realtimeState;
      if (this.realtimeState) {
        this.handleRealtime(false);
      } else {
        this.unsubscribeRealTime$.next();
      }
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
      this.unsubscribeRealTime$.next();
      this.unsubscribeRealTime$.complete();
    }
}
