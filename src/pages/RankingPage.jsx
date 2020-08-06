import {Page, TextView} from 'tabris';

export class RankingPage extends Page {
 constructor(properties) {
 super();
 this.set({title: 'Stand', ...properties}).append(
 <TextView center>No news yet!</TextView>
 );
 }
};