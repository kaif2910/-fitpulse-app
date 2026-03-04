import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIntensity]',
  standalone: true
})
export class IntensityDirective {
  @Input() intensity: string = 'Medium';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.getColor());
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.transition = '0.3s';
    this.el.nativeElement.style.boxShadow = color ? '0 5px 15px rgba(0,0,0,0.1)' : '';
  }

  private getColor(): string {
    if (this.intensity === 'High') return '#fee2e2'; // Reddish
    if (this.intensity === 'Low') return '#f0fdf4';  // Greenish
    return '#fefce8'; // Yellowish (Medium)
  }
}
