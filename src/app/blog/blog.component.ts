import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
	quotes: any[] =  [];
	
	constructor(private http: HttpClient) {
		this.getPost();
	}

	ngOnInit(): void {
		
			const observable = new Observable(subscriber => {
			subscriber.next(1);
			subscriber.next(2);
			subscriber.next(3);
			setTimeout(() => {
				subscriber.next(4);
				subscriber.complete();
			}, 1000);
			});
		console.log('just before subscribe');
		observable.subscribe({
		next(x) { console.log('got value ' + x); },
		error(err) { console.error('something wrong occurred: ' + err); },
		complete() { console.log('done'); }
});
console.log('just after subscribe');
	}

	getPost() {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Authorization': 'Token f239a9d9afaa0acc1ce196b92c9dea58'
			})
		};
		this.http.get('https://favqs.com/api/quotes',httpOptions).subscribe((data: any) => {
			this.quotes = data.quotes;
		});
	}

}
