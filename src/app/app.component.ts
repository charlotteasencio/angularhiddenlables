import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular focus / blur Events';

  constructor(private el: ElementRef) {
  }
  
  ngAfterViewInit() {
       // document.getElementsByTagName('input') : to gell all Docuement imputs
       const inputList = [].slice.call((<HTMLElement>this.el.nativeElement).getElementsByTagName('input'));
       const labelList = [].slice.call((<HTMLElement>this.el.nativeElement).getElementsByTagName('label'));
        inputList.forEach((input: HTMLElement) => {
            input.addEventListener('focus', () => {
                let inputClass = input.className;
                input.classList.toggle('active');
            });
            input.addEventListener('blur', () => {
                input.classList.toggle('active');
            });
        });
    }
  
  private toogleClass(input : HTMLElement){
    let inputClass = input.classList.toggle('active');


  }
}