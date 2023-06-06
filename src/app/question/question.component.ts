import { Component, HostListener, OnInit} from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../model/question.model';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {

  @Input() question!: Question;
  @Input() questionNumber!:number;
  @Input() quizLength!:number;
  @Output() nextQuestion: EventEmitter<any> = new EventEmitter();
  @Output() prevQuestion: EventEmitter<any> = new EventEmitter();

  selectedOption: number[] = [];

  constructor(private router: Router) { }

  ngOnChanges() {
  }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (parseInt(event.key) > 0 && parseInt(event.key) < 7) {
      this.selectedOption.push(parseInt(event.key)-1);
    }    
  }
}
