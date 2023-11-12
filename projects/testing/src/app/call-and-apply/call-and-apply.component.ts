import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyPipe, CallPipe } from 'ngxtension/call-apply';

@Component({
    selector: 'app-call-and-apply',
    standalone: true,
    imports: [CommonModule, CallPipe, ApplyPipe],
    template: `
        <div>
            <h2>Call & Apply Pipe (ngxtension)</h2>

            <a href="https://ngxtension.netlify.app/utilities/pipes/call-apply/" target="_blank">Documentation</a>
            <blockquote>
                Both CallPipe and ApplyPipe require a PURE function. They are designed to take advantage of Angular's
                pure pipe memoization. Using this inside the function body will throw an error.
            </blockquote>

            <p>No <code>CallPipe</code>: {{ stuff }}</p>
            <p><code>CallPipe</code> with <code>"stuff | call: capsThis"</code>: {{ stuff | call: capsThis }}</p>

            <p>
                <code>ApplyPipe</code> with <code>"getTargetFieldPlaceholder | apply: type"</code>:
                {{ getTargetFieldPlaceholder | apply: type }}
            </p>
            <button (click)="setType('solid')">make solid</button>
            <button (click)="setType('liquid')">make liquid</button>
        </div>
    `,
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
