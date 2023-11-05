import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf, JsonPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TestClass } from 'modelsZZZZ/test-model.model';
import { TestComponent } from './test/test.component';
import { BasicPreComponent, ValidationStatusTreeComponent } from 'ngx-reactive-forms-visualizer';
// import { BasicPreComponent, ValidationStatusTreeComponent } from 'dist/ngx-reactive-forms-visualizer';
// import { BasicPreComponent, ValidationStatusTreeComponent } from 'projects/ngx-reactive-forms-visualizer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgIf,
        MatDividerModule,
        MatCardModule,
        BasicPreComponent,
        ValidationStatusTreeComponent,
        JsonPipe,
        TestComponent,
    ],
})
export class AppComponent {
    exampleForm = this.fb.group({
        name: ['', Validators.required],
        town: [''],
        addressNumber: [null],
        nickname: [''],
    });
    snippet = '<pre>{{form.value | json}}</pre>';

    thing!: TestClass;

    stuff = null;

    arr = ['1', '2'];

    constructor(private fb: NonNullableFormBuilder) {}
}
