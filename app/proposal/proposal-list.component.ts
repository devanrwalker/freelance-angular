import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Company', 'http://devcamp.com', 'Ruby on Rails', 150, 120, 15, 'devanrwalker@gmail.com')
	proposalTwo: Proposal = new Proposal(100, 'Company2', 'http://devcamp.com', 'Ruby on Rails', 150, 120, 15, 'devanrwalker@gmail.com')
	proposalThree: Proposal = new Proposal(2, 'Company3', 'http://devcamp.com', 'Ruby on Rails', 150, 120, 15, 'devanrwalker@gmail.com')

	proposals: Proposal[] = [
		this.proposalOne,
		this.proposalTwo,
		this.proposalThree
	]
}