import {Page, TextView} from 'tabris';

export class RegistrationPage extends Page {
 constructor(properties) {
 super();
 this.set({title: 'News', ...properties}).append(
 <TextView center>No news yet!</TextView>
 );
 }
};