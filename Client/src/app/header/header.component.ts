import { Component, OnInit, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { HeaderDirective } from './header.directive';
import { HeaderENComponent } from './header-en.component';

@Component ({
    selector: 'app-header',
    template: '<template header></template>'
})
export class HeaderComponent implements OnInit {
    @ViewChild(HeaderDirective) adHost: HeaderDirective;

    constructor(private router: Router, private shared_service: SharedService, private _componentFactoryResolver: ComponentFactoryResolver,) { 
    }

    ngOnInit() { 
        let browser_language = this.shared_service.browser_language;
        console.log(browser_language);
        if(browser_language === 'en'){
            let componentFactory = this._componentFactoryResolver.resolveComponentFactory(HeaderENComponent);
            let viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            let componentRef = viewContainerRef.createComponent(componentFactory);
        }
    }
}