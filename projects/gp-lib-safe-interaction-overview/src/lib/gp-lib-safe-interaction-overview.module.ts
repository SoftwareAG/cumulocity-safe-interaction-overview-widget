import { NgModule } from '@angular/core';
import { CoreModule, HOOK_COMPONENTS} from '@c8y/ngx-components';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material';
import { GpLibSafeInteractionOverviewComponent } from './gp-lib-safe-interaction-overview.component';
import { SafeInteractionOverviewConfigComponent } from './gp-lib-safe-interaction-overview-config.component';
import { GpLibSafeInteractionOverviewService } from './gp-lib-safe-interaction-overview.service';
import * as preview from './preview-image';


@NgModule({
  declarations: [GpLibSafeInteractionOverviewComponent, SafeInteractionOverviewConfigComponent],
  imports: [
    CoreModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  entryComponents: [GpLibSafeInteractionOverviewComponent, SafeInteractionOverviewConfigComponent],
  providers: [
    GpLibSafeInteractionOverviewService,
{
    provide: HOOK_COMPONENTS,
    multi: true,
    useValue: {
        id: 'safe-interaction-overview.widget',
        label: 'Safe Interaction Overview',
        previewImage: preview.previewImage,
        description: 'Safe Interaction Overview',
        component: GpLibSafeInteractionOverviewComponent,
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
export class GpLibSafeInteractionOverviewModule { }
