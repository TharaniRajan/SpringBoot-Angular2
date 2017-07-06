import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from '../shared/shared.service';
import { ITestAngular } from './testangular';

@Injectable()
export class TestAngularService {
    constructor(private _http : Http, private shared_service: SharedService){}

    private handleError(error : Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    create_TestAngular(testangular: ITestAngular): Observable<ITestAngular>{
        return this._http.post(`${this.shared_service.baseUrl}/TestAngular_Default_Activity/create_TestAngular`,testangular)
            .map((response : Response) => <ITestAngular> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    update_TestAngular(testangular: ITestAngular): Observable<ITestAngular>{
        return this._http.put(`${this.shared_service.baseUrl}/TestAngular_Default_Activity/update_TestAngular`,testangular)
            .map((response : Response) => <ITestAngular> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    search_for_update_TestAngular(testangular_id: number): Observable<ITestAngular>{
        return this._http.get(`${this.shared_service.baseUrl}/TestAngular_Default_Activity/search_for_update_TestAngular/${testangular_id}`)
            .map((response : Response) => <ITestAngular> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    delete_TestAngular(testangular: ITestAngular): Observable<ITestAngular>{
        return this._http.delete(`${this.shared_service.baseUrl}/TestAngular_Default_Activity/delete_TestAngular/${testangular.id}`)
            .map((response : Response) => <ITestAngular> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    get_all_TestAngular(): Observable<ITestAngular[]>{
        return this._http.get(`${this.shared_service.baseUrl}/TestAngular_Default_Activity/get_all_TestAngular`)
            .map((response : Response) => <ITestAngular[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    search_TestAngular(testangular: ITestAngular): Observable<ITestAngular[]>{
        return this._http.get(`${this.shared_service.baseUrl}/TestAngular_Default_Activity/search_TestAngular?name=${testangular.name || '%25%25'}&address=${testangular.address || '%25%25'}`)
            .map((response : Response) => <ITestAngular[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
}