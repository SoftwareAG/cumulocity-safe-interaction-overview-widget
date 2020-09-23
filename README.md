# Cumulocity Widget - Safe Interaction Overview

##  Overview
This is an Angular 8 widget designed for Smart Social Distancing Demo. The widget displays the count of total, assigned, available and non operational tags.

To deliver the expected functionality one need to select the Group in configuration. There is a toggle button for management which you can switch on if you want to see all the 4 counts(total,assigned,available,non-operational) and keep it off if you want to see only assigned and available counts.

## Features

 *  **Displays the tags availbale count:** 
 *  **Display the tags unavailable count:** 
 * **Displays the tags total count:** If management is turned on in configuration.
 * **Displays the tags non-operational count:** If management is turned on in configuration.

## Installation
  
**Supported Cumulocity Environments:**
  
*  **App Builder:** Tested with Cumulocity App Builder version 1.2.1.
  
*  **Cockpit Application:** Tested with Cockpit 1006.3.0 with [Patch Fix](https://www.npmjs.com/package/cumulocity-runtime-widget-loader).

**Prerequisites:**
  
* Git
  
* NodeJS (release builds are currently built with `v10.19.0`)
  
* NPM (Included with NodeJS)

**External dependencies:**

```

"@angular/cdk": "8.2.3"

"@angular/material": "8.2.3",

"@c8y/ngx-components": "^1006.3.0",

"@c8y/ng1-modules": "^1006.3.0",

"@c8y/style": "^1006.3.0",

```

**Installation Steps For App Builder:**

**Note:** If you are new to App Builder or not yet downloaded/clone app builder code then please follow [App builder documentation(Build Instructions)](https://github.com/SoftwareAG/cumulocity-app-builder) before proceeding further.

1. Open Your existing App Builder project and install external dependencies by executing below command or install it manually.
   
  - Angular Material version 8.2.3

     Installation command: ```npm i @angular/material@8.2.3 ``` 


2. Grab the Process Widget **[Latest Release Binary](https://labcase.softwareag.com/projects/gp-processing/storage/show/Releases/gp-lib-processing-widget-1.0.0.tgz)**

3. Install the Binary file in app builder.

```
npm i <binary  file  path>/gp-lib-processing-widget-1.0.0.tgz
```

4. Open index.less located at /cumulocity-app-builder/ui-assets/

5. Update index.less file with below theme. Import at first line in file/begining of file(Please ignore this step if it already exist).

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import '~@c8y/style/main.less';
@import '~@c8y/style/extend.less';
```
6. Import GpLibProcessingWidgetModule in app.module.ts and also place the imported Module under `@NgModule`.

```

import {GpLibProcessingWidgetModule} from 'gp-lib-processing-widget';

@NgModule({

  imports: [

    GpLibProcessingWidgetModule    

      ]

  })

```

7.  Congratulation! Installation is now completed. Now you can run app builder locally or build and deploy it into your tenant.
  
```
//Start App Builder
npm run start
// Build App
npm run build
// Deploy App
npm run deploy
```