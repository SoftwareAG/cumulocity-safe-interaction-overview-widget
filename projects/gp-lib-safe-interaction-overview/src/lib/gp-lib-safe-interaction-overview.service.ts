import { Injectable } from '@angular/core';
import { InventoryService } from '@c8y/client';

@Injectable()
export class GpLibSafeInteractionOverviewService {
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
      if (childDevice.hasOwnProperty('assignmentStatus')) {
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

      if (childDevice.hasOwnProperty('assignmentStatus')) {
        if (childDevice.assignmentStatus) {
          this.assigned++;
        } else {
          this.available++;
        }
        this.deviceRecord[childDevice.id] = childDevice['assignmentStatus'];
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
