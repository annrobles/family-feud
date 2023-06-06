import { Component, OnInit} from '@angular/core';
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
  selectedOption = ''
  @Output() nextQuestion: EventEmitter<any> = new EventEmitter();
  @Output() prevQuestion: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnChanges() {
  }

  ngOnInit(): void {
  }

}
