import { Component, OnInit } from '@angular/core';
import { Batch } from '../batch';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  batches:Batch[];
  batch:Batch;
  constructor(private batchservice:BatchService) { }

  ngOnInit() {
    this.newbatch();
    this.getbatches();
  }

  newbatch():void{
    this.batch={
      BatchId:0,
      BatchName:'',
      StartDate:'2018-09-08',
      TentativeEndDate:'2018-06-20',
      NoOfHours:0,
      HoursTaken:0,
      Remarks:''
    };

  }
getbatches():void{
//  this.batches=this.batchservice.getbatchesMockdata();
this.batchservice.getbatches()
.subscribe(b=>this.batches=b);
}

saveBatchData():void{
this.batchservice.saveBatchData(this.batch)
.subscribe(b=>this.batches.push(b));
}
}
