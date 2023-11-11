import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BasicPreComponent, ValidationStatusTreeComponent } from 'ngx-reactive-forms-visualizer';

@Component({
    selector: 'app-form-examples',
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
        MatButtonModule,
    ],
    templateUrl: './form-examples.component.html',
    styleUrl: './form-examples.component.scss',
})
export class FormExamplesComponent {
    exampleForm = this.fb.group({
        name: ['', Validators.required],
        town: [''],
        addressNumber: [null],
        nickname: [''],
    });
    snippet = '<pre>{{form.value | json}}</pre>';

    constructor(private fb: NonNullableFormBuilder) {}
}
