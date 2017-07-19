import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sample4',
    template: `
        <span>I am first span</span>
        <ng-template [ngTemplateOutlet]="tpl"></ng-template>
        <span>I am last span </span>
        <ng-template #tpl>
            <span>I am span 4 in template</span>
        </ng-template>
    `
})
export class Sample4Component {}