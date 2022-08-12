import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
