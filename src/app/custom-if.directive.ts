import { Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';
//https://stackoverflow.com/questions/40228712/angular-2-understand-viewcontainerref-usage-with-templateref
@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {
  @Input() set appCustomIf(condition:any){
    if (!condition) {
      console.log(this.templateRef);
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition) {
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef) { 

  }

}
