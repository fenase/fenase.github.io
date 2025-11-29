import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { HighlightModule } from 'ngx-highlightjs';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';

import { BigExcelCreatorRoutingModule } from './big-excel-creator-routing.module';
import { BigExcelCreatorComponent } from './big-excel-creator.component';
import { DataValidationComponent } from './data-validation/data-validation.component';
import { InstallationComponent } from './installation/installation.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { StartComponent } from './start/start.component';
import { AutofilterComponent } from './styling/autofilter/autofilter.component';
import { ColumnFormattingComponent } from './styling/column-formatting/column-formatting.component';
import { CommentsComponent } from './styling/comments/comments.component';
import { ConditionalFormattingComponent } from './styling/conditional-formatting/conditional-formatting.component';
import { HideSheetComponent } from './styling/hide-sheet/hide-sheet.component';
import { MergeCellsComponent } from './styling/merge-cells/merge-cells.component';
import { StylingComponent } from './styling/styling.component';
import { StylingComponent as StylingDetailsComponent } from './styling/styling/styling.component';
import { UsageComponent } from './usage/usage.component';



@NgModule({
    imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    BigExcelCreatorRoutingModule,
    ButtonModule,
    ListboxModule,
    PanelModule,
    HighlightModule,
    BigExcelCreatorComponent,
    StartComponent,
    UsageComponent,
    DataValidationComponent,
    StylingComponent,
    PageLayoutComponent,
    InstallationComponent,
    ColumnFormattingComponent,
    HideSheetComponent,
    MergeCellsComponent,
    CommentsComponent,
    AutofilterComponent,
    ConditionalFormattingComponent,
    StylingDetailsComponent,
]
})
export class BigExcelCreatorModule { }
