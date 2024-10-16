import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { CalculatorService } from './calculator.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Calculator';
  calculatorForm: FormGroup;
  buttons: string[] = ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', '*'];

  constructor(private fb: FormBuilder, private calcService: CalculatorService) {
    this.calculatorForm = this.fb.group({
      display: ['']
    });
  }

  onButtonClick(btn: string): void {
    if (btn === 'DEL') {

      this.calculatorForm.patchValue({
        display: this.calculatorForm.value.display.slice(0, -1)
      });
    } else {

      this.calculatorForm.patchValue({
        display: this.calculatorForm.value.display + btn
      });
    }
  }

  onReset(): void {
    // Reset the display
    this.calculatorForm.reset({ display: '' });
  }

  onCalculate(): void {
    const result = this.calcService.calculate(this.calculatorForm.value.display);
    this.calculatorForm.patchValue({ display: result });
  }
}

