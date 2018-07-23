import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class ConfigService<T> {
  private datas: T[];
  host:string = "http://localhost:8280/testspring";
  constructor(private http:HttpClient) { }

  get(path:string):Observable<T[]>{
    return this.http.get<T[]>(this.host + "/" + path);
  }

  post(path:string,obj:T):Observable<T>{
    return this.http.post<T>(this.host + "/" + path, obj);
  }

  delete(path:string, obj:T):Observable<T>{
    return this.http.delete<T>(this.host + "/" + path, obj);
  }

  /**
     * Extract Data
     * @param res
     */
    private extractData(res:Response) {
      let resultBody = res.json() ;
      this.datas = <T[]> resultBody;

      return this.datas;
  }
}
