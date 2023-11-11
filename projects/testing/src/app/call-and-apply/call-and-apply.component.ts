import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyPipe, CallPipe } from 'ngxtension/call-apply';

@Component({
    selector: 'app-call-and-apply',
    standalone: true,
    imports: [CommonModule, CallPipe, ApplyPipe],
    template: ` <div>
        <h2>Call & Apply Pipe (ngxtension)</h2>
        <p>Call pipe {{ stuff | call: capsThis }}</p>
        <p>Apply pipe: {{ getTargetFieldPlaceholder | apply: type }}</p>
        <button (click)="setType('solid')">make solid</button>
        <button (click)="setType('liquid')">make liquid</button>
    </div>`,
    styles: ``,
})
export class CallAndApplyComponent {
    stuff = 'stuff';

    type: 'solid' | 'liquid' = 'solid';

    setType(type: 'solid' | 'liquid') {
        this.type = type;
    }

    capsThis(thing: string) {
        return thing.toUpperCase();
    }

    getTargetFieldPlaceholder(type: 'solid' | 'liquid', extraPrompt?: string) {
        return (type === 'solid' ? 'fork' : 'spoon') + (extraPrompt ?? '');
    }
}
