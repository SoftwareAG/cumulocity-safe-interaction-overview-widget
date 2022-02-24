# Cumulocity Widget - Safe Interaction Overview[<img width="35" src="https://user-images.githubusercontent.com/67993842/97668428-f360cc80-1aa7-11eb-8801-da578bda4334.png"/>](https://github.com/SoftwareAG/cumulocity-safe-interaction-overview-widget/releases/download/1.0.0/gp-safe-interation-overview-runtime-widget-1.0.0.zip)

##  Overview
This is an Angular 8 widget designed for Smart Social Distancing Demo. The widget displays the count of total, assigned, available and non operational tags.

To deliver the expected functionality one need to select the Group in configuration. There is a toggle button for management which you can switch on if you want to see all the 4 counts(total,assigned,available,non-operational) and keep it off if you want to see only assigned and available counts.

## Features

 *  **Displays the tags availbale count:** 
 *  **Display the tags unavailable count:** 
 * **Displays the tags total count:** If management is turned on in configuration.
 * **Displays the tags non-operational count:** If management is turned on in configuration.

## Installation
## Runtime Widget Installation (Without Application Deployment)

* This widget support runtime deployment. Download [Runtime Binary](https://github.com/SoftwareAG/cumulocity-safe-interaction-overview-widget/releases/download/1.0.0/gp-safe-interation-overview-runtime-widget-1.0.0.zip) and use application builder to install your runtime widget.

  
**Supported Cumulocity Environments:**
  
*  **App Builder:** Tested with Cumulocity App Builder version 1.2.1.
  
*  **Cockpit Application:** Tested with Cockpit 1006.11.0 with [Patch Fix](https://www.npmjs.com/package/cumulocity-runtime-widget-loader).

**Prerequisites:**
  
* Git
  
* NodeJS (release builds are currently built with `v10.19.0`)
  
* NPM (Included with NodeJS)

**External dependencies:**

```

"@angular/cdk": "8.2.3"

"@angular/material": "8.2.3",

"@c8y/ngx-components": "^1006.6.8",

"@c8y/ng1-modules": "^1006.6.8",

"@c8y/style": "^1006.6.8",

```

**Installation Steps For App Builder:**

**Note:** If you are new to App Builder or not yet downloaded/clone app builder code then please follow [App builder documentation(Build Instructions)](https://github.com/SoftwareAG/cumulocity-app-builder) before proceeding further.

1. Open Your existing App Builder project and install external dependencies by executing below command or install it manually.
   
  - Angular Material version 8.2.3

     Installation command: ```npm i @angular/material@8.2.3 ``` 


2. Grab the Safe Interaction Overview Widget **[Latest Release Binary](https://github.com/SoftwareAG/cumulocity-safe-interaction-overview-widget/releases/download/1.0.0/gp-safe-interaction-overview-1.0.0.tgz)**

3. Install the Binary file in app builder.

```
npm i <binary  file  path>/gp-safe-interaction-overview-1.0.0.tgz
```
4. Open index.less located at /cumulocity-app-builder/ui-assets/

5. Update index.less file with below theme. Import at first line in file/begining of file(Please ignore this step if it already exist).

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import '~@c8y/style/main.less';
@import '~@c8y/style/extend.less';
```
6. Import GpSafeInteractionOverviewModule in app.module.ts and also place the imported Module under `@NgModule`.

```

import {GpSafeInteractionOverviewModule} from 'gp-safe-interaction-overview';

@NgModule({

  imports: [

    GpSafeInteractionOverviewModule    

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

**Installation Steps For Cockpit:**

**Note:** If you are new to Cockpit or not yet created any cockpit application then please follow [Web SDK for Angular](https://cumulocity.com/guides/web/angular/) before proceeding further.

1. Open Your existing Cockpit/Cumulocity project and install external dependencies by executing below command or install it manually.

  - Angular Material version 8.2.3

     Installation command: ```npm i @angular/material@8.2.3 ``` 


2. Grab the Safe Interaction Widget **[Latest Release Binary](https://github.com/SoftwareAG/cumulocity-safe-interaction-overview-widget/releases/download/1.0.0/gp-safe-interaction-overview-1.0.0.tgz)**

3. Install the Binary file in app builder.

```
npm i <binary  file  path>/gp-safe-interaction-overview-1.0.0.tgz
```

**Note:** If you don't find branding folder then please follow [Cumulocity Branding](https://cumulocity.com/guides/web/angular/#branding)

4. Open branding.less located at /cumulocity-app/branding/

5. In `branding.less ` import following design templates. Import at first line/begining of file(Please ignore this step if it already exist).

  ```

  @import '~@angular/material/prebuilt-themes/indigo-pink.css';

  @import '~@c8y/style/main.less';

  @import '~@c8y/style/extend.less';
  ```
6. Import GpSafeInteractionOverviewModule in app.module.ts and also place the imported Module under `@NgModule`.

  ```

import {GpSafeInteractionOverviewModule} from 'gp-safe-interaction-overview';

  @NgModule({

    imports: [

      GpSafeInteractionOverviewModule    

        ]

    })

  ```

7.  Congratulation! Installation is now completed. Now you can run your app locally or build and deploy it into your tenant.
  
```
//Start App Builder
npm run start
// Build App
npm run build
// Deploy App
npm run deploy
```

## Build Instructions
  
**Note:** It is only necessary to follow these instructions if you are modifying/extending this widget, otherwise see the [Installation Guide](#Installation).
  
**Prerequisites:**
  
* Git
  
* NodeJS (release builds are currently built with `v10.19.0`)
  
* NPM (Included with NodeJS)

**Instructions**

1. Clone the repository:
```
git clone https://github.com/SoftwareAG/cumulocity-safe-interaction-overview-widget.git
```
2. Change directory:

  ```cd gp-ssd-overview```

3. run npm i command to install all library files specified in source code

  ```npm i ``` 

4. run npm run buildMinor command to create a binary file under dist folder

  ```npm run buildMinor ``` 

5. (Optional) Local development server:
  
  ```npm start```

6. Build the app:

  ```npm run build```

7. Deploy the app:
  ```npm run deploy```

## QuickStart
This guide will teach you how to add widget in your existing or new dashboard.

1. Open the Application Builder from the app switcher (Next to your username in the top right)

2. Click Add application

3. Enter the application details and click Save

4. Select Add dashboard

5. Click Blank Dashboard

6. Enter the dashboard details and click Save

7. Select the dashboard from the navigation

8. Check for your widget and test it out.



Congratulations! Safe Interaction Overview Widget is configured.
  
## User Guide

1. Target Assets/Devices - select group of interest


## Troubleshooting
  
This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
  
_____________________
  
For more information you can Ask a Question in the [TECHcommunity Forums](https://tech.forums.softwareag.com/tags/c/forum/1/Cumulocity-IoT).
  
  
You can find additional information in the [Software AG TECHcommunity](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).
