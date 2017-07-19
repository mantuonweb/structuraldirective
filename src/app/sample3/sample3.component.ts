import { Component, AfterViewInit,TemplateRef ,ViewChild,ViewContainerRef} from '@angular/core';
//Automatic process
/** Mock definition
 * class ViewContainerRef {
    element: ElementRef
    length: number

    createComponent(componentFactory...): ComponentRef<C>
    createEmbeddedView(templateRef...): EmbeddedViewRef<C>
    ...
  }
 */
@Component({
   selector: 'sample3',
    // template: `
    //     <ng-template #tpl>
    //         <span>I am span in template</span>
    //     </ng-template>
    // `
    template:` <span>I am first span</span>
        <ng-template #vc></ng-template>
        <span>I am last span</span>
        <ng-template #tpl>
            <span>I am span 3 in template</span>
        </ng-template>
        `
})
export class Sample3Component implements AfterViewInit {
    @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
    @ViewChild("tpl") tpl: TemplateRef<any>;
    ngAfterViewInit() {
       // let elementRef = this.tpl.elementRef;
        // outputs `template bindings={}`
        this.vc.createEmbeddedView(this.tpl);
    }
}
