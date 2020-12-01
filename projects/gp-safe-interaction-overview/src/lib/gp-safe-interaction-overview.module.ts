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

import { NgModule } from '@angular/core';
import { CoreModule, HOOK_COMPONENTS} from '@c8y/ngx-components';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material';
import { GpSafeInteractionOverviewComponent } from './gp-safe-interaction-overview.component';
import { SafeInteractionOverviewConfigComponent } from './gp-safe-interaction-overview-config.component';
import { GpSafeInteractionOverviewService } from './gp-safe-interaction-overview.service';
import * as preview from './preview-image';


@NgModule({
  declarations: [GpSafeInteractionOverviewComponent, SafeInteractionOverviewConfigComponent],
  imports: [
    CoreModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  entryComponents: [GpSafeInteractionOverviewComponent, SafeInteractionOverviewConfigComponent],
  providers: [
    GpSafeInteractionOverviewService,
{
    provide: HOOK_COMPONENTS,
    multi: true,
    useValue: {
        id: 'safe-interaction-overview.widget',
        label: 'Safe Interaction Overview',
        previewImage: preview.previewImage,
        description: 'Safe Interaction Overview',
        component: GpSafeInteractionOverviewComponent,
        configComponent: SafeInteractionOverviewConfigComponent,
        data : {
            ng1 : {
                options: {
                    noDeviceTarget: false,
                    noNewWidgets: false,
                    deviceTargetNotRequired: false,
                    groupsSelectable: true
                }
            }
        }
    }
  }],
})
export class GpSafeInteractionOverviewModule { }
