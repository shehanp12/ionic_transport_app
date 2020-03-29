import { Injectable, Inject } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  imageDetailList: AngularFireList<any>;
fileList: any[];
dataSet: Data = {
id:'',
url:''
};
msg:string = 'error';
constructor(@Inject(AngularFireDatabase) private firebase: AngularFireDatabase) { }
getImageDetailList() {
this.imageDetailList = this.firebase.list('imageDetails');
}
insertImageDetails(id:any,url:any) {
this.dataSet = {
id : id,
url: url
};
this.imageDetailList.push(this.dataSet);
}
getImage(value:any)
{
this.imageDetailList.snapshotChanges().subscribe(
list => {
this.fileList = list.map(item => { return item.payload.val(); });
this.fileList.forEach(element => {
if(element.id===value)
this.msg = element.url;
});
if(this.msg==='error')
alert('No record found');
else
{
window.open(this.msg);
this.msg = 'error';
}
}
);
}
}
export interface Data
{
id:string;
url:string;

  
}
