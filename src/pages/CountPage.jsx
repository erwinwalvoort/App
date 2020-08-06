import {Page, TextView} from 'tabris';

export class CountPage extends Page {
 constructor(properties) {
 super();
 this.set({title: 'Tellen', ...properties}).append(
 <TextView center>No news yet!</TextView>
 );
 }
};