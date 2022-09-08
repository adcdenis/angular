import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './dstv/components/notfound/notfound.component';
import { ProductService } from './dstv/service/product.service';
import { CountryService } from './dstv/service/country.service';
import { CustomerService } from './dstv/service/customer.service';
import { EventService } from './dstv/service/event.service';
import { IconService } from './dstv/service/icon.service';
import { NodeService } from './dstv/service/node.service';
import { PhotoService } from './dstv/service/photo.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
