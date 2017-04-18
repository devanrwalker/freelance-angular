import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"

	documents: Document[] = [
		{
			title: "My First Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Office-Computer-Laptop-Work-Freelancer-Business-583839.jpg',
		},
		{
			title: "My Second Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Office-Computer-Laptop-Work-Freelancer-Business-583839.jpg',
		},
		{
			title: "My Last Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Office-Computer-Laptop-Work-Freelancer-Business-583839.jpg',
		}
	]
}