import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-signals',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDividerModule],
    template: `
        <div>
            <a href="https://angular.dev/guide/signals" target="_blank">Documentation</a>
            <blockquote>
                Angular Signals is a system that granularly tracks how and where your state is used throughout an
                application, allowing the framework to optimize rendering updates.
            </blockquote>
            <h2>Signals & Computed and Update</h2>
            <p>count primative: {{ count() | json }}</p>
            <p>doubleCount primative: {{ doubleCount() | json }}</p>

            <hr />

            <pre>"countObj": {{ countObj() | json }}</pre>
            <pre>"doubleCountObj": {{ doubleCountObj() | json }}</pre>
        </div>
        <button (click)="updateValue()" mat-raised-button color="primary">update value</button>
    `,
    styles: [],
})
export class SignalsComponent {
    count: WritableSignal<number> = signal(1);
    doubleCount: Signal<number> = computed(() => this.count() * 2);

    countObj: WritableSignal<{ isSignal: boolean; count: number }> = signal({
        isSignal: true,
        count: 1,
    });
    doubleCountObj: Signal<{ isSignal: boolean; count: number }> = computed(() => {
        return { isSignal: this.countObj().isSignal, count: this.countObj().count * 2 };
    });

    updateValue() {
        this.count.update(value => value + 1);
        this.countObj.update(value => {
            return { ...value, count: value.count + 1 };
        });
    }
}
