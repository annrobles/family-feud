import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../model/question.model';
import { QuestionService } from '../services/question.service';

@UntilDestroy()
@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit, OnDestroy {

    questions: Question[] = [];

    constructor(
        private router: Router,
        private questionService: QuestionService
    ) { }

    ngOnInit(): void {  
        this.questionService.get().subscribe((response) => {
            this.questions = response;
            console.log("this.questions ", this.questions)
        }); 
    }

    ngOnDestroy(){
    }

}