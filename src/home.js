function createHomePage() {
  const content = document.getElementById('content');
  // Base Layout
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

  // Left Sidebar
  const home = document.createElement('div');
  const explore = document.createElement('div');
  const notifications = document.createElement('div');
  const messages = document.createElement('div');
  const bookmarks = document.createElement('div');
  const twitterBlue = document.createElement('div');
  const profile = document.createElement('div');
  const more = document.createElement('div');
  const tweet = document.createElement('div');

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

  // Left Sidebar appending
  home.append(homeText);
  explore.append(exploreText);
  notifications.append(notificationsText);
  messages.append(messagesText);
  bookmarks.append(bookmarksText);
  twitterBlue.append(twitterBlueText);
  profile.append(profileText);
  more.append(moreText);
  tweet.append(tweetText);
  column1.append(home);
  column1.append(explore);
  column1.append(notifications);
  column1.append(messages);
  column1.append(bookmarks);
  column1.append(twitterBlue);
  column1.append(profile);
  column1.append(more);
  column1.append(tweet);

  // Middle
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
  const searchIcon = document.createElement('img');
  searchIcon.classList.add('searchIcon');
  searchIcon.src = '../src/assets/searchIcon.png';
  searchBar.append(searchIcon);
  searchBar.append(searchTwitterText);
}

export default createHomePage();
