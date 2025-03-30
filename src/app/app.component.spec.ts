import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent]
    });
    component = TestBed.inject(AppComponent);
  });

  it('should return 0 for an empty string', () => {
    expect(component.add("")) .toBe(0);
  });

  it('should return the number itself if only one number is provided', () => {
    expect(component.add("1")).toBe(1);
  });

  it('should return sum of comma-separated numbers', () => {
    expect(component.add("1,5")).toBe(6);
  });

  it('should handle new lines as delimiters', () => {
    expect(component.add("1\n2,3")).toBe(6);
  });

  it('should support custom delimiters', () => {
    expect(component.add("//;\n1;2")) .toBe(3);
  });

  it('should throw an error when negative numbers are provided', () => {
    expect(() => component.add("1,-2,3,-4"))
      .toThrowError("Negative numbers not allowed: -2, -4");
  });
});