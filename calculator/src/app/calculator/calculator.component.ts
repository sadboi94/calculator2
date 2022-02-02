import { Component } from '@angular/core';
import { NumberService } from '../services/number.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  result: string = '';
  longButtons: string[] = ['AC', 'CE', 'Read', 'Write'];
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];
  previousValue: string = '';
  currentValue: string = '';

  constructor(private numberService: NumberService) {}

  addToExpression(value: string) {
    if (this.result != '') {
      this.previousValue = this.currentValue;
      this.currentValue = value;
    }

    if (value === 'AC') {
      this.result = '';
    } else if (value === 'CE') {
      this.result = this.previousValue != '=' ? this.result.slice(0, -1) : this.result;
    } else if (value === 'Read') {
      this.numberService.getNumber().subscribe((number: any) => {
        this.result = number['message'];
      });
    } else if (value === 'Write') {
      if (this.checkIfExpressionIsValid(this.result)) {
        let message = eval(this.result);
        message === undefined ? (message = '0') : (message = message);
        this.numberService.setNumber(message);
      } else {
        alert("You can't store an invalid expression");
      }
    } else if (value === '=') {
      if (this.checkIfExpressionIsValid(this.result)) {
        this.result = eval(this.result);
      } else {
        alert('Not valid expression');
      }
    } else {
      this.result += value;
    }
  }

  checkIfExpressionIsValid(expression: string): boolean {
    try {
      eval(expression);
      return true;
    } catch (error) {
      return false;
    }
  }
}
