import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Question } from "../model/question.model";

@Injectable()
export class QuestionService {
    endpoint = 'https://family-feud-api.herokuapp.com/';

    constructor(
        private http: HttpClient) {
    }

    add(question: Question) {
        return this.http.post(this.endpoint, question).pipe();
    }

    get() {
        return this.http.get<Question[]>(this.endpoint).pipe();
    }

    getById(index: number) {
        return this.http.get<Question>(this.endpoint).pipe();
    }

    update(question: Question, index: number) {
        return this.http.put(this.endpoint + "/" + index, question).pipe();
    }

    delete(index: number) {
        return this.http.delete(this.endpoint + "/" + index).pipe();
    }

}
