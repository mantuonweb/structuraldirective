import { Component, AfterViewInit,TemplateRef ,ViewChild,ViewContainerRef} from '@angular/core';
//Mannual process
@Component({
   selector: 'sample2',
    // template: `
    //     <ng-template #tpl>
    //         <span>I am span in template</span>
    //     </ng-template>
    // `
    template:` <span>I am first span</span>
        <ng-template #vc></ng-template>
        <span>I am last span</span>
        <ng-template #tpl>
            <span>I am span 2 in template</span>
        </ng-template>`
})
export class Sample2Component implements AfterViewInit {
    @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
    @ViewChild("tpl") tpl: TemplateRef<any>;
    ngAfterViewInit() {
        let elementRef = this.tpl.elementRef;
        // outputs `template bindings={}`
        console.log(elementRef.nativeElement.textContent);
        let view = this.tpl.createEmbeddedView(null);
        this.vc.insert(view);
    }
}
