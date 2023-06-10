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
  @Input() questionNumber!: number;
  @Input() quizLength!: number;  
  @Input() selectedOption: number[][] = [];
  @Input() retries: number[] = [];
  @Output() nextQuestion: EventEmitter<any> = new EventEmitter();
  @Output() prevQuestion: EventEmitter<any> = new EventEmitter();

  showWrongMark: boolean = false;

  constructor(private router: Router) {
  }

  ngOnChanges() {
  }

  ngOnInit(): void {    
    if (!this.selectedOption[this.questionNumber]) {
      this.selectedOption[this.questionNumber] = [];
      this.retries[this.questionNumber] = 0;
    }
    console.log("xxx")
  }

private xKeyExecuted: boolean = false;

@HostListener('document:keydown', ['$event'])
onKeyDown(event: KeyboardEvent) {
  if (parseInt(event.key) > 0 && parseInt(event.key) < 7) {
    this.selectedOption[this.questionNumber].push(parseInt(event.key) - 1);
    this.showWrongMark = false;
  }

  if (event.key === "x" && !this.xKeyExecuted) {
    this.xKeyExecuted = true;
    this.showWrongMark = true;

    let i = 0;
    const interval = setInterval(() => {
      if (++i === 5) {
        clearInterval(interval);
        this.showWrongMark = false;
        this.xKeyExecuted = false;
        this.retries[this.questionNumber] = this.retries[this.questionNumber] + 1;
      }
    }, 500);
  }
}


  goToNext() {
    this.questionNumber++
    if (!this.selectedOption[this.questionNumber]) {
      this.selectedOption[this.questionNumber] = [];
      this.retries[this.questionNumber] = 0;
    }
    this.nextQuestion.emit();
  }

  goToPrevious() {
    this.questionNumber--;
    this.prevQuestion.emit();
    this.retries[this.questionNumber] = 0;
  }
}
