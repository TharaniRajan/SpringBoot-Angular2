import { Component, OnInit, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { Router } from '@angular/router';
import { FooterDirective } from './footer.directive';
import { SharedService } from '../shared/shared.service';
import { FooterENComponent } from './footer-en.component';

@Component ({
    selector: 'app-footer',
    template: '<template footer></template>'
})
export class FooterComponent implements OnInit {
    @ViewChild(FooterDirective) adHost: FooterDirective;

    constructor(private router: Router, private shared_service: SharedService, private _componentFactoryResolver: ComponentFactoryResolver,) { 
    }

    ngOnInit() { 
        let browser_language = this.shared_service.browser_language;
        console.log(browser_language);
        if(browser_language === 'en'){
            let componentFactory = this._componentFactoryResolver.resolveComponentFactory(FooterENComponent);
            let viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            let componentRef = viewContainerRef.createComponent(componentFactory);
        }
    }

}