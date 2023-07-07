import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'lib-basic-pre',
    template: `<pre>{{ formGroupInput.value | json }}</pre>`,
    styles: [],
})
export class BasicPreComponent {
    @Input({ required: true })
    formGroupInput!: FormGroup;

    constructor() {}
}
