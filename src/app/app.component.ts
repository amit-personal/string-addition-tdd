import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputValue: string = '';
  result: number | null = null;
  errorMessage: string = '';

  calculate(): void {
    try {
      this.result = this.add(this.inputValue);
      this.errorMessage = '';
    } catch (error: any) {
      this.errorMessage = error.message;
      this.result = null;
    }
  }

  add(numbers: string): number {
    if (numbers === '') return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numbers = numbers.substring(delimiterEndIndex + 1);
    }
    console.log('del', delimiter);
    const parsedNumbers = numbers.split(delimiter).map((n) => parseInt(n, 10));
    console.log('parsedNumbers', parsedNumbers);
    const negativeNumbers = parsedNumbers.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(', ')}`
      );
    }

    return parsedNumbers.reduce((sum, current) => sum + current, 0);
  }
}
