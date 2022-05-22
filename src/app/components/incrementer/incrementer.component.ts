import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {
  @Input() progress: number = 50;
  @Input() btnClass: string = '';
  @Output() changeValueEmit: EventEmitter<number> = new EventEmitter();

  public addProgress = 5;
  public removeProgress = -5;
  private _minimumValue = 0;
  private _maximumValue = 100;

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  changeValue(progress: number): void {
    if (this.progress >= this._maximumValue && progress >= 0) {
      this.changeValueEmit.emit(this._maximumValue);
      this.progress = this._maximumValue;
      return;
    }
    if (this.progress <= this._minimumValue && progress < 0) {
      this.changeValueEmit.emit(this._minimumValue);
      this.progress = this._minimumValue;
      return;
    }

    this.progress += progress
    this.changeValueEmit.emit(this.progress);
  }

  onChange(progress: number): void {
    console.log(progress)
    if (progress >= 100) {
      this.progress = this._maximumValue;
    }
    if (progress <= 0 ) {
      this.progress = this._minimumValue;
    } else {
      this.progress = progress;
    }

    this.changeValueEmit.emit(this.progress);
  }
}
