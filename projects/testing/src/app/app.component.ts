import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, MatTabsModule, RouterModule],
})
export class AppComponent implements OnInit {
    links = ['form-examples', 'signals', 'call-and-apply-pipes'];
    activeLink = this.links[0];
    router = inject(Router);

    ngOnInit() {
        this.router.navigate([this.activeLink]);
    }
}
