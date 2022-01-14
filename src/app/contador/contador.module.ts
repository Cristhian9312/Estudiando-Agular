import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponente } from './contador/contador.componet';

@NgModule({
    declarations: [
        ContadorComponente
    ],
    exports: [
        ContadorComponente
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule {}