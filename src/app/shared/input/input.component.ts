import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  
  input: any
  
  @Input()
  errorMessage: string
  
  @Input()
  label: string

  @ContentChild(NgModel) model: NgModel
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model
    if (this.input === undefined) 
      throw new Error("Usar este componente com ngModel");
  }

}
