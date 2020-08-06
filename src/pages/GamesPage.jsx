import {Page, TextView} from 'tabris';

export class GamesPage extends Page {
 constructor(properties) {
 super();
 this.set({title: 'Wedstrijden', ...properties}).append(
 <TextView center>No news yet!</TextView>
 );
 }
};