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
            <h2>Signals & Computed and Updated</h2>
            <p>count: {{ count() | json }}</p>
            <p>doubleCount: {{ doubleCount() | json }}</p>
            <hr />
            <p>countObj: {{ countObj() | json }}</p>
            <p>doubleCountObj: {{ doubleCountObj() | json }}</p>
        </div>
        <button (click)="updateValue()" mat-raised-button color="primary">update value</button>
    `,
    styles: [],
})
export class SignalsComponent {
    count: WritableSignal<number> = signal(1);
    doubleCount: Signal<number> = computed(() => this.count() * 2);

    countObj: WritableSignal<{ name: string; count: number }> = signal({
        name: 'thingy',
        count: 1,
    });
    doubleCountObj: Signal<{ name: string; count: number }> = computed(() => {
        return { name: this.countObj().name, count: this.countObj().count * 2 };
    });

    updateValue() {
        this.count.update(value => value + 1);
        this.countObj.update(value => {
            return { name: value.name, count: value.count + 1 };
        });
    }
}
