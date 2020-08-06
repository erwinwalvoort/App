import {Page, TextView} from 'tabris';

export class MessagesPage extends Page {
 constructor(properties) {
 super();
 this.set({title: 'Meldingen', ...properties}).append(
 <TextView center>No news yet!</TextView>
 );
 }
};