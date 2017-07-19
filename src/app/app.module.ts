import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomIfDirective } from './custom-if.directive';
import { SimpleComponent } from './simple/simple.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { Sample4Component } from './sample4/sample4.component';
import { Sample5Component } from './sample5/sample5.component';
//https://hackernoon.com/exploring-angular-dom-abstractions-80b3ebcfc02
@NgModule({
  declarations: [
    AppComponent,
    CustomIfDirective,
    SimpleComponent,
    Sample2Component,
    Sample3Component,
    Sample4Component,
    Sample5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
