import {ImageView, Page, Button, NavigationView, TextView, contentView} from 'tabris';
import {RegistrationPage} from './pages/RegistrationPage';
import {GamesPage} from './pages/GamesPage';
import {RankingPage} from './pages/RankingPage';
import {CountPage} from './pages/CountPage';
import {MessagesPage} from './pages/MessagesPage';


contentView.background = '#47D962';

contentView.append(
  <$>
	<NavigationView stretch  background='#47D962' toolbarVisible='false' >
		<Page title="HOME" background='#47D962'>
			<ImageView centerX top={1} width={320} height={400}
			background='rgb(220, 220, 220)'
			image={'src/veld.png'}
			scaleMode='stretch'
			/>    
			<TextView centerX bottom='prev() 20' font='24px'/>
			<Button width='200' left='56' top='200' background='#DA522D' onSelect={() => openRegistrationPage()} >Registreren</Button>
			<Button width='200' left='56' top='240' background='#DA522D' onSelect={() => openGamesPage()} >Wedstrijden</Button>
			<Button width='200' left='56' top='280' background='#DA522D' onSelect={() => openRankingPage()} >Stand</Button>
			<Button width='200' left='56' top='320' background='#DA522D' onSelect={() => openCountPage()} >Tellen</Button>
			<Button width='200' left='56' top='360' background='#DA522D' onSelect={() => openMessagePage()} >Meldingen</Button>
	</Page>
</NavigationView>
  </$>
);

function showText() {
  $(TextView).only().text = 'Tabris.js rocks!';
}
function showText2() {
  $(TextView).only().text = 'Tabris.js rocks!';
}
function showText3() {
  $(TextView).only().text = 'Tabris.js rocks!';
}

function openRegistrationPage() {
 $(NavigationView).only().append(
 <RegistrationPage />
 );
}
function openGamesPage() {
 $(NavigationView).only().append(
 <GamesPage />
 );
}
function openRankingPage() {
 $(NavigationView).only().append(
 <RankingPage />
 );
}
function openCountPage() {
 $(NavigationView).only().append(
 <CountPage />
 );
}
function openMessagePage() {
 $(NavigationView).only().append(
 <MessagesPage />
 );
}
