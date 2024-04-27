import { Component,Input,OnChanges, SimpleChanges } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quentitybtn',
  standalone: true,
  imports: [],
  templateUrl: './quentitybtn.component.html',
  styleUrl: './quentitybtn.component.css'
})
export class QuentitybtnComponent  {

  count:number=1

  @Input() product : any = {}

  constructor(private dataservice : DataService){}

  updatequentityplush(pro : any){
    this.count=this.count+1
    this.dataservice.getcartdata(pro, this.count)
  }
  updatequentityminus(pro : any){
    if(this.count!=0){
      
      this.count=this.count-1
      this.dataservice.getcartdata(pro, this.count)
    }
  }
  // ngOnChanges(changes: SimpleChanges): void {
      
  // }
}
