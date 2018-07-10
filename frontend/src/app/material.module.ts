// Modules //
import { NgModule } from '@angular/core';

// Material Modules //
import {
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule
} from '@angular/material';

// Decorator //
@NgModule({
    imports: [
        MatToolbarModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatBadgeModule
    ],
    exports: [
        MatToolbarModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatBadgeModule
    ]
})
export class MaterialModule { }
