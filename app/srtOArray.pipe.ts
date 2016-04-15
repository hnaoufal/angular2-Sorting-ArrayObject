import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'srtOArray'})
export class SrtOArrayPipe implements PipeTransform {

	transform(arr, arg ){
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
