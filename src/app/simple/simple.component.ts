import { Component, OnInit,ViewChild,AfterViewInit,ElementRef } from '@angular/core';
@Component({
    selector: 'sample',
    template: `
        <span #tref>I am span 1</span>   `
})
export class SimpleComponent implements AfterViewInit {
    @ViewChild("tref", {read: ElementRef}) tref: ElementRef;

    ngAfterViewInit(): void {
        // outputs `I am span`
        console.log(this.tref.nativeElement.textContent);
    }
}
