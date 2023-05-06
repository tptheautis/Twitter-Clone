function createHomePage() {
  // Base layout
  const content = document.getElementById('content');
  const mainContainer = document.createElement('div');
  const column1 = document.createElement('div');
  const column2 = document.createElement('div');
  const column3 = document.createElement('div');
  const row1 = document.createElement('div');
  const row2 = document.createElement('div');
  const searchBar = document.createElement('div');
  const happeningContainer = document.createElement('div');
  const whoToFollowContainer = document.createElement('div');
  mainContainer.classList.add('mainContainer');
  column1.classList.add('column1');
  column2.classList.add('column2');
  column3.classList.add('column3');
  row1.classList.add('row1');
  row2.classList.add('row2');
  searchBar.classList.add('searchBar');
  happeningContainer.classList.add('happeningContainer');
  whoToFollowContainer.classList.add('whoToFollowContainer');
  content.append(mainContainer);
  mainContainer.append(column1);
  mainContainer.append(column2);
  mainContainer.append(column3);
  column2.append(row1);
  column2.append(row2);
  column3.append(searchBar);
  column3.append(happeningContainer);
  column3.append(whoToFollowContainer);

  // Left Sidebar Elements
  const home = document.createElement('div');
  const explore = document.createElement('div');
  const notifications = document.createElement('div');
  const messages = document.createElement('div');
  const bookmarks = document.createElement('div');
  const twitterBlue = document.createElement('div');
  const profile = document.createElement('div');
  const more = document.createElement('div');
  const tweet = document.createElement('div');

  //Left Sidebar Containers 
  const homeContainer = document.createElement('div')
  const exploreContainer = document.createElement('div');
  const notificationsContainer = document.createElement('div');
  const messagesContainer = document.createElement('div');
  const bookmarksContainer = document.createElement('div');
  const twitterBlueContainer = document.createElement('div');
  const profileContainer = document.createElement('div');
  const moreContainer = document.createElement('div');
  const tweetContainer = document.createElement('div');

  // Left Sidebar Images
  const twitterLogo = document.createElement('img');
  twitterLogo.classList.add('twitterLogo');
  twitterLogo.src = '../src/assets/twitter.png';
  column1.append(twitterLogo);
  const homeLogo = document.createElement('img');
  homeLogo.classList.add('homeLogo');
  homeLogo.src = '../src/assets/home.png';
  home.append(homeLogo);
  const exploreLogo = document.createElement('img');
  exploreLogo.classList.add('exploreLogo');
  exploreLogo.src = '../src/assets/hashtag.png';
  explore.append(exploreLogo);
  const notificationsLogo = document.createElement('img');
  notificationsLogo.classList.add('notificationsLogo');
  notificationsLogo.src = '../src/assets/bell.png';
  notifications.append(notificationsLogo);
  const messagesLogo = document.createElement('img');
  messagesLogo.classList.add('messagesLogo');
  messagesLogo.src = '../src/assets/mail.png';
  messages.append(messagesLogo);
  const bookmarksLogo = document.createElement('img');
  bookmarksLogo.classList.add('bookmarksLogo');
  bookmarksLogo.src = '../src/assets/bookmark.png';
  bookmarks.append(bookmarksLogo);
  const twitterBlueLogo = document.createElement('img');
  twitterBlueLogo.classList.add('twitterBlueLogo');
  twitterBlueLogo.src = '../src/assets/twitterBlue.png';
  twitterBlue.append(twitterBlueLogo);
  const profileLogo = document.createElement('img');
  profileLogo.classList.add('profileLogo');
  profileLogo.src = '../src/assets/profile.png';
  profile.append(profileLogo);
  const moreLogo = document.createElement('img');
  moreLogo.classList.add('moreLogo');
  moreLogo.src = '../src/assets/more.png';
  more.append(moreLogo);


  // Left Sidebar Classes
  home.classList.add('home');
  explore.classList.add('explore');
  notifications.classList.add('notifications');
  messages.classList.add('messages');
  bookmarks.classList.add('bookmarks');
  twitterBlue.classList.add('twitterBlue');
  profile.classList.add('profile');
  more.classList.add('more');
  tweet.classList.add('tweet');

  // Left Sidebar Text
  const homeText = document.createTextNode('Home');
  const exploreText = document.createTextNode('Explore');
  const notificationsText = document.createTextNode('Notifications');
  const messagesText = document.createTextNode('Messages');
  const bookmarksText = document.createTextNode('Bookmarks');
  const twitterBlueText = document.createTextNode('Twitter Blue');
  const profileText = document.createTextNode('Profile');
  const moreText = document.createTextNode('More');
  const tweetText = document.createTextNode('Tweet');

  // Left Sidebar Appending
  column1.append(homeContainer);
  column1.append(exploreContainer);
  column1.append(notificationsContainer);
  column1.append(messagesContainer);
  column1.append(bookmarksContainer);
  column1.append(twitterBlueContainer);
  column1.append(profileContainer);
  column1.append(moreContainer);
  column1.append(tweetContainer);
  homeContainer.append(homeLogo, homeText);
  exploreContainer.append(exploreLogo, exploreText);
  notificationsContainer.append(notificationsLogo, notificationsText);
  messagesContainer.append(messagesLogo, messagesText);
  bookmarksContainer.append(bookmarksLogo, bookmarksText);
  twitterBlueContainer.append(twitterBlueLogo, twitterBlueText);
  profileContainer.append(profileLogo, profileText);
  moreContainer.append(moreLogo, moreText);
  column1.append(tweet);

  // Middle Elements
  const searchTwitter = document.createElement('div');
  const whatsHappening = document.createElement('h2');
  const searchTwitterText = document.createTextNode('Search Twitter');
  const whatsHappeningText = document.createTextNode('What\'s Happening');
  const homeHeading = document.createElement('h1');
  const forYou = document.createElement('div');
  const following = document.createElement('div');
  homeHeading.classList.add('homeHeading');
  forYou.classList.add('forYou');
  following.classList.add('following');
  const homeHeadingText = document.createTextNode('Home');
  const forYouText = document.createTextNode('For you');
  const followingText = document.createTextNode('Following');
  homeHeading.append(homeHeadingText);
  forYou.append(forYouText);
  following.append(followingText);
  searchTwitter.append(searchTwitterText);
  whatsHappening.append(whatsHappeningText);
  column3.append(searchTwitter);
  column3.append(whatsHappening);
  row1.append(homeHeading);
  row1.append(forYou);
  row1.append(following);

  // Right Sidebar
  //SearchBar
  const searchIcon = document.createElement('img');
  searchIcon.classList.add('searchIcon');
  searchIcon.src = '../src/assets/searchIcon.png';
  searchBar.append(searchIcon);
  searchBar.append(searchTwitterText);a
  const whoToFollowText = document.createTextNode('Who to follow')
  whoToFollowContainer.append(whoToFollowText);
  //Odin Project Profile
  const odinContainer = document.createElement('div');
  odinContainer.classList.add('odinContainer');
  whoToFollowContainer.append(odinContainer);
  const odinIcon = document.createElement('img');
  odinIcon.classList.add('odinIcon');
  odinIcon.src = '../src/assets/odinIcon.png';
  const odinText = doucment.createTextNode('@TheOdinProject');
  whoToFollowContainer.append(odinText);
  
  whoToFollowContainer.append(odinIcon);
  //Stack Overflow Profile

  //Github Profile

}

export default createHomePage();
