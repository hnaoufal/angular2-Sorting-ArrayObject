import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'srtOArray', pure: false})
export class SrtOArrayPipe implements PipeTransform {

	transform(arr: CustomObject[], args: any): CustomObject[]{
		if(arr === undefined){
			return 0;
		}else{
		return arr.sort((a, b) => {
			if (a.id > b.id) {
				return 1;
			}
			if (a.id < b.id) {
				return -1;
			}
			return 0;
		});
		}
	}
}
