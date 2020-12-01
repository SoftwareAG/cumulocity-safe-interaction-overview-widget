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

import { Injectable } from '@angular/core';
import { InventoryService } from '@c8y/client';

@Injectable()
export class GpSafeInteractionOverviewService {
  response: any;
  devicesAll: any;
  totalemp: any;
  totaltags: any;
  available: any;
  assigned: any;
  tagsAlloted: any;
  tagsUnalloted: any;
  nonopt: any;
  deviceRecord = {};
  constructor(public inventory: InventoryService) {}

  async getDeviceList(DeviceGroup) {
    let response: any = null;
    const filter: object = {
      pageSize: 2000,
      withTotalPages: true,
    };
    response = (await this.inventory.childAssetsList(DeviceGroup, filter)).data;

    // Check that the response is a Group and not a device
    if (response.hasOwnProperty('c8y_IsDevice')) {
      alert('Please select a group for this widget to fuction correctly');
    }
    return response;
  }

  async fetchTagsList(id) {
    await this.getDeviceList(id).then((response) => {

      this.totaltags = response.length;
      this.available = 0;
      this.assigned = 0;
      this.deviceRecord = {};
      response.forEach(device => {
        this.fetchResult(device);
      });
    });

    const tagsOverview: TagsOverview = {
      totalcount: this.totaltags,
      available: this.available,
      assigned: this.assigned,
    };

    return tagsOverview;
  }
  fetchResult(childDevice) {
    if (this.deviceRecord.hasOwnProperty(childDevice.id)) {
      if (childDevice.assignmentStatus) {
        if (
          childDevice.assignmentStatus &&
          this.deviceRecord[childDevice.id] !== childDevice.assignmentStatus
        ) {
          this.available--;
          this.assigned++;
        } else if (
          !childDevice.assignmentStatus &&
          this.deviceRecord[childDevice.id] !== childDevice.assignmentStatus
        ) {
          this.available++;
          this.assigned--;
        }
        this.deviceRecord[childDevice.id] = childDevice.assignmentStatus;
        const tagsOverview: TagsOverview = {
          totalcount: this.totaltags,
          available: this.available,
          assigned: this.assigned,
        };
        return tagsOverview;
      }
    } else {

      if (childDevice.assignmentStatus) {
        if (childDevice.assignmentStatus) {
          this.assigned++;
        } else {
          this.available++;
        }
        this.deviceRecord[childDevice.id] = childDevice.assignmentStatus;
        const tagsOverview: TagsOverview = {
          totalcount: this.totaltags,
          available: this.available,
          assigned: this.assigned,
        };

        return tagsOverview;
      }
    }
  }
}
export interface TagsOverview {
  totalcount?: number;
  available?: number;
  assigned?: number;
}
