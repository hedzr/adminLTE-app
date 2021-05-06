# AdminLTEApp

`AdminLTE-app` is a simple [Angular CLI](https://github.com/angular/angular-cli) v10.2.0
web application integrating with [AdminLTE 3.1.0](https://github.com/ColorlibHQ/AdminLTE/releases) .

## How to Integrate AdminLTE Latest Release with Angular 10+

The following guide is rewritten based the original [this](https://www.prishusoft.com/blog/Integrate-AdminLTE-theme-to-Angular-Project.html).

### Steps

#### Step 1: Install the Angular CLI

```bash
yarn global add @angular/cli
# or: npm install -g @angular/cli
```

#### Step 2: Create a workspace and initial application

```bash
ng new adminLTE-app

? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax ]
CREATE adminLTE-app/angular.json (3958 bytes)
CREATE adminLTE-app/package.json (1313 bytes)

```

#### Step 3: Serve the application

```bash
cd adminLTE-app
npm start
# or: ng serve --open
```

And open the main page at: http://localhost:4200/

#### Step 4: Download the Latest Release of Amin LTE

Visit the releases section on Github and download the latest release.

[**Download latest release**](https://github.com/ColorlibHQ/AdminLTE/releases)

From the latest release need to download the SourceCode.zip file and extract that file.

#### Step 5: Add AdminLTE required file to Asset Folder

From the Admin LTE Code copy the “dist” and “plugins” folder to assets folder (`<app>/src/assets/`).

#### Step 6: Import the Admin LTE javascript and css

Import the javascript and Css file from the asset folder to Index.html file as mention below.

And `<app>/src/index.html` should be like this:

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>AdminLTEApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">


  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="assets/plugins/fontawesome-free/css/all.min.css">
  <!-- IonIcons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="assets/dist/css/adminlte.min.css">

</head>

<!--
  skin-blue  layout-top-nav login-page

`body` tag options:

  Apply one or more of the following classes to to the body tag
  to get the desired effect

  * sidebar-collapse
  * sidebar-mini

-->

<body class="hold-transition sidebar-mini">
  <app-root></app-root>

  <!-- REQUIRED SCRIPTS -->

  <!-- jQuery -->
  <script src="assets/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap -->
  <script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- AdminLTE -->
  <script src="assets/dist/js/adminlte.js"></script>

  <!-- OPTIONAL SCRIPTS -->
  <script src="assets/plugins/chart.js/Chart.min.js"></script>
  <!-- AdminLTE for demo purposes -->
  <script src="assets/dist/js/demo.js"></script>
  <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
  <script src="assets/dist/js/pages/dashboard3.js"></script>
</body>

</html>
```



#### Step 7: Add Components for Header

Run the following command in terminal / command line

```bash
ng g c appheader
```

Which Create the appheader component as below.

[![img](https://user-images.githubusercontent.com/12786150/117232958-cde8bd00-ae54-11eb-86db-ff3a2a2ef95e.png)

Now open the `appheader.component.html` and copy `Navbar` chapter from `index3.html` with AdminLTE source code folder.

Copy all the HTML Content between `<nav></nav>` Including `nav` tag into appheader.component.html.

The `appheader.component.html` looks like:

```html
<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="index.html" class="nav-link">Home</a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" class="nav-link">Contact</a>
    </li>
  </ul>

  <!-- Right navbar links -->
  <ul class="navbar-nav ml-auto">
    <!-- Navbar Search -->
    <li class="nav-item">
      <a class="nav-link" data-widget="navbar-search" href="#" role="button">
        <i class="fas fa-search"></i>
      </a>
      <div class="navbar-search-block">
        <form class="form-inline">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
              <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>

    <!-- Messages Dropdown Menu -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-comments"></i>
        <span class="badge badge-danger navbar-badge">3</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img src="assets/dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Brad Diesel
                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">Call me whenever you can...</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img src="assets/dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                John Pierce
                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">I got your message bro</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img src="assets/dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Nora Silvester
                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">The subject goes here</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
      </div>
    </li>
    <!-- Notifications Dropdown Menu -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-bell"></i>
        <span class="badge badge-warning navbar-badge">15</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span class="dropdown-item dropdown-header">15 Notifications</span>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <i class="fas fa-envelope mr-2"></i> 4 new messages
          <span class="float-right text-muted text-sm">3 mins</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <i class="fas fa-users mr-2"></i> 8 friend requests
          <span class="float-right text-muted text-sm">12 hours</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <i class="fas fa-file mr-2"></i> 3 new reports
          <span class="float-right text-muted text-sm">2 days</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="fullscreen" href="#" role="button">
        <i class="fas fa-expand-arrows-alt"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
        <i class="fas fa-th-large"></i>
      </a>
    </li>
  </ul>
</nav>
<!-- /.navbar -->
```



Now add `appheader.component` to `app.component.html` as mention below

```ts
<app-appheader></app-appheader>
<router-outlet></router-outlet>
```

Run the Application again and you can see the header is set as per below screen shot

~~skip~~



#### Step 8: Add Components for Left Menu

Run the following command in terminal / command line

```bash
ng g c appsidebar

CREATE src/app/appsidebar/appsidebar.component.html (26 bytes)
CREATE src/app/appsidebar/appsidebar.component.spec.ts (635 bytes)
CREATE src/app/appsidebar/appsidebar.component.ts (274 bytes)
CREATE src/app/appsidebar/appsidebar.component.scss (0 bytes)
UPDATE src/app/app.module.ts (763 bytes)
```

Copy all the HTML Content between <aside></aside> Including aside tag into `appsidebar.component.html`

Now add `appsidebar.component` to `app.component.html` as mention below

```ts
<app-appheader></app-appheader>
<app-appsidebar></app-appsidebar>
<router-outlet></router-outlet>
```

After run the application you can see the output as below:

~~skip~~



#### Step 9: Add Components for Footer

Run the following command in terminal / Command line

```ts
ng g c appfooter

CREATE src/app/appfooter/appfooter.component.html (28 bytes)
CREATE src/app/appfooter/appfooter.component.spec.ts (649 bytes)
CREATE src/app/appfooter/appfooter.component.ts (282 bytes)
CREATE src/app/appfooter/appfooter.component.scss (0 bytes)
UPDATE src/app/app.module.ts (857 bytes)
```

Copy all the HTML Content between `<footer></footer>` Including aside tag into `appfooter.component.html`, and it looks like:

```html
<!-- Main Footer -->
<footer class="main-footer">
  <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
  All rights reserved.
  <div class="float-right d-none d-sm-inline-block">
    <b>Version</b> 3.1.0
  </div>
</footer>
```

Now add `appfooter.component` to `app.component.html` as mention below

```ts
<app-appheader></app-appheader>
<app-appsidebar></app-appsidebar>
<router-outlet></router-outlet>
<app-appfooter></app-appfooter>
```

Note: As we have not added any content part so footer is display on top.

~~skip~~



#### Step 10: Add Components for Settings

Run the following command in terminal / Command line

```ts
ng g c appsetting

CREATE src/app/appsetting/appsetting.component.html (29 bytes)
CREATE src/app/appsetting/appsetting.component.spec.ts (656 bytes)
CREATE src/app/appsetting/appsetting.component.ts (286 bytes)
CREATE src/app/appsetting/appsetting.component.scss (0 bytes)
UPDATE src/app/app.module.ts (955 bytes)
```

Copy all the HTML Content between `<aside></aside>` Including aside tag into `appsetting.component.html`. This html content you can find after footer html in admin LTE theme. And after added ,the `appsetting.component.html` looks like:

```html
<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
  <!-- Control sidebar content goes here -->
</aside>
<!-- /.control-sidebar -->
```

Now add appsetting.component to app.component.html as mention below

```ts
<div class="wrapper">
  <app-appheader></app-appheader>
  <app-appsidebar></app-appsidebar>


  <router-outlet></router-outlet>


  <app-appfooter></app-appfooter>
  <app-appsetting></app-appsetting>

</div><!-- ./wrapper -->
```

After you run the application you can see the setting menu is display

~~skip~~



#### Step 11: Add Dashboard component

As now we have setup the Header, Footer, Menu, setting component now we can create dashboard component and add middle content from the theme.

Run the following command in terminal / Command line

```ts
ng g c dashboard

CREATE src/app/dashboard/dashboard.component.html (28 bytes)
CREATE src/app/dashboard/dashboard.component.spec.ts (649 bytes)
CREATE src/app/dashboard/dashboard.component.ts (282 bytes)
CREATE src/app/dashboard/dashboard.component.scss (0 bytes)
UPDATE src/app/app.module.ts (1049 bytes)
```

Copy all the HTML Content of Content Wrapper (`<>`). Contains page content into `ashboard.component.html`. Its partial contents should be like this:

```
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
...
</div>
<!-- /.content-wrapper -->
```

Now we add the new route path for it:

Open `app-routing.module.ts`, and insert string into `routes` array:

```ts
const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  // { path: 'second-component', component: SecondComponent },
];
```

Before `routes`, we import the dashboard component:

```ts
import { DashboardComponent } from './dashboard/dashboard.component';
```

So the final `app-routing.module.ts`looks like:

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  // { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

All folks!

Here is all we set now Admin LTE Theme See below screen shot

<img width="1420" alt="image-20210506095211202" src="https://user-images.githubusercontent.com/12786150/117233044-f5d82080-ae54-11eb-9ba5-310473cb4b23.png">




## Short For Angular Dev

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## LICENSE

MIT
