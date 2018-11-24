import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Batch } from './batch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
batches:Batch[];
batch:Batch;

  constructor(private httpClient:HttpClient) { }
  getbatches():Observable<Batch[]>{
    return this.httpClient.get<Batch[]>
    ("http://localhost:50915/api/Batches");
  }


  getbatchesMockdata():Batch[]{
    this.batches=[{
      BatchId:1,
      BatchName:'CCS',
      StartDate:'2018-09-08',
      TentativeEndDate:'2018-06-20',
      NoOfHours:12,
      HoursTaken:13,
      Remarks:'Excellent'
    },
    {
    BatchId:2,
      BatchName:'TCS',
      StartDate:'2016-09-18',
      TentativeEndDate:'2017-06-20',
      NoOfHours:20,
      HoursTaken:103,
      Remarks:'NA'

    },
    {
      BatchId:3,
      BatchName:'Wipro',
      StartDate:'2018-09-08',
      TentativeEndDate:'2018-06-20',
      NoOfHours:120,
      HoursTaken:100,
      Remarks:'Excellent'
    },
  ]
    return this.batches;
  }
  saveBatchData(batch:Batch):Observable<Batch>{
    const header=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post<Batch>
    ("http://localhost:50915/api/Batches",batch,{headers:header});
  }
}
