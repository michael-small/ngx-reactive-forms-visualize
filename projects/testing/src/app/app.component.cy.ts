import { MountConfig } from 'cypress/angular';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    const config: MountConfig<AppComponent> = {
        imports: [AppComponent, BrowserAnimationsModule, RouterTestingModule],
        componentProperties: {},
    };

    // TODO d
    it('mounts', () => {
        cy.mount(AppComponent, config);
    });
});
