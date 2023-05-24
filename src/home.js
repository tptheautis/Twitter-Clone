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

  // Left Sidebar Containers
  const homeContainer = document.createElement('div');
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
  twitterLogo.src = '../src/assets/twitter-logo.png';
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
  homeContainer.classList.add('homeContainer');
  exploreContainer.classList.add('exploreContainer');
  notificationsContainer.classList.add('notificationsContainer');
  messagesContainer.classList.add('messagesContainer');
  bookmarksContainer.classList.add('bookmarksContainer');
  twitterBlueContainer.classList.add('twitterBlueContainer');
  profileContainer.classList.add('profileContainer');
  moreContainer.classList.add('moreContainer');

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
  tweet.append(tweetText);

  // Middle Elements
  const searchTwitter = document.createElement('div');
  const whatsHappening = document.createElement('h2');
  const searchTwitterText = document.createTextNode('Search Twitter');
  const whatsHappeningText = document.createTextNode('What\'s Happening');
  const homeHeadingContainer = document.createElement('h1');
  const forYou = document.createElement('div');
  const following = document.createElement('div');
  homeHeadingContainer.classList.add('homeHeading');
  forYou.classList.add('forYou');
  following.classList.add('following');
  const homeHeadingText = document.createTextNode('Home');
  const blueUnderline = document.createElement('div');
  blueUnderline.classList.add('blueUnderline');
  const forYouText = document.createTextNode('For you');
  const forYouContainer = document.createElement('div');
  forYouContainer.classList.add('forYouContainer');
  forYouContainer.classList.add('.forYouContainer');
  const forYouTextContainer = document.createElement('div');
  forYouTextContainer.classList.add('forYouTextContainer');
  const followingText = document.createTextNode('Following');
  const followingContainer = document.createElement('div');
  followingContainer.classList.add('followingContainer');
  const followingTextContainer = document.createElement('div');
  followingTextContainer.classList.add('followingTextContainer');
  const row1OptionsContainer = document.createElement('div');
  row1OptionsContainer.classList.add('row1OptionsContainer');
  searchTwitter.append(searchTwitterText);
  happeningContainer.append(whatsHappeningText);
  column3.append(searchTwitter);
  column3.append(whatsHappening);
  row1.append(homeHeadingContainer, row1OptionsContainer);
  homeHeadingContainer.append(homeHeadingText);
  row1OptionsContainer.append(forYouContainer, followingContainer);
  forYouContainer.append(forYouTextContainer);
  followingContainer.append(followingTextContainer);
  forYouTextContainer.append(forYouText);
  followingTextContainer.append(followingText);
  forYouTextContainer.append(blueUnderline);
  // Blue Underline animation
  forYouContainer.addEventListener('click', () => {
    followingTextContainer.style.fontWeight = 200;
    forYouTextContainer.style.fontWeight = 600;
    forYouTextContainer.append(blueUnderline);
  });
  followingContainer.addEventListener('click', () => {
    forYouTextContainer.style.fontWeight = 200;
    followingTextContainer.style.fontWeight = 600;
    followingTextContainer.append(blueUnderline);
  });

  // Right Sidebar
  const whoToFollowTextContainer = document.createElement('div');
  whoToFollowTextContainer.classList.add('whoToFollowTextContainer');
  const whoToFollowText = document.createTextNode('Who to follow');

  // SearchBar
  const searchIcon = document.createElement('img');
  searchIcon.classList.add('searchIcon');
  searchIcon.src = '../src/assets/searchIcon.png';
  searchBar.append(searchIcon);
  searchBar.append(searchTwitterText);

  // Odin Project Profile
  const odinContainer = document.createElement('div');
  odinContainer.classList.add('odinContainer');
  const odinIcon = document.createElement('img');
  odinIcon.classList.add('odinIcon');
  odinIcon.src = '../src/assets/odinIcon.png';
  const odinTextContainer = document.createElement('div');
  odinTextContainer.classList.add('odinTextContainer');
  const odinName = document.createTextNode('The Odin Project');
  const odinNameContainer = document.createElement('div');
  odinNameContainer.classList.add('odinNameContainer');
  const odinUsername = document.createTextNode('@TheOdinProject');
  const odinUsernameContainer = document.createElement('div');
  odinUsernameContainer.classList.add('odinUsernameContainer');
  whoToFollowContainer.append(whoToFollowTextContainer);
  whoToFollowTextContainer.append(whoToFollowText);
  whoToFollowContainer.append(odinContainer);
  odinContainer.append(odinIcon);
  odinContainer.append(odinTextContainer);
  odinTextContainer.append(odinNameContainer);
  odinTextContainer.append(odinUsernameContainer);
  odinNameContainer.append(odinName);
  odinUsernameContainer.append(odinUsername);
  // Stack Overflow Profile
  const stackContainer = document.createElement('div');
  stackContainer.classList.add('stackContainer');
  const stackTextContainer = document.createElement('div');
  stackTextContainer.classList.add('stackTextContainer');
  const stackIcon = document.createElement('img');
  stackIcon.classList.add('stackIcon');
  stackIcon.src = '../src/assets/stackIcon.png';
  const stackName = document.createTextNode('Stack Overflow');
  const stackNameContainer = document.createElement('div');
  stackNameContainer.classList.add('stackNameContainer');
  const stackUsername = document.createTextNode('@StackOverflow');
  const stackUsernameContainer = document.createElement('div');
  stackUsernameContainer.classList.add('stackUsernameContainer');
  whoToFollowContainer.append(stackContainer);
  stackContainer.append(stackIcon);
  stackContainer.append(stackTextContainer);
  stackTextContainer.append(stackNameContainer);
  stackTextContainer.append(stackUsernameContainer);
  stackNameContainer.append(stackName);
  stackUsernameContainer.append(stackUsername);
  // Github Profile
  const githubContainer = document.createElement('div');
  githubContainer.classList.add('githubContainer');
  const githubTextContainer = document.createElement('div');
  githubTextContainer.classList.add('githubTextContainer');
  const githubIcon = document.createElement('img');
  githubIcon.classList.add('githubIcon');
  githubIcon.src = '../src/assets/gitIcon.png';
  const githubName = document.createTextNode('GitHub');
  const githubNameContainer = document.createElement('div');
  githubNameContainer.classList.add('githubNameContainer');
  const githubUsername = document.createTextNode('@github');
  const githubUsernameContainer = document.createElement('div');
  githubUsernameContainer.classList.add('githubUsernameContainer');
  whoToFollowContainer.append(githubContainer);
  githubContainer.append(githubIcon);
  githubContainer.append(githubTextContainer);
  githubTextContainer.append(githubNameContainer);
  githubTextContainer.append(githubUsernameContainer);
  githubNameContainer.append(githubName);
  githubUsernameContainer.append(githubUsername);
  // Show More
  const showMoreContainer = document.createElement('div');
  showMoreContainer.classList.add('showMoreContainer');
  const showMoreText = document.createTextNode('Show more');
  whoToFollowContainer.append(showMoreContainer);
  showMoreContainer.append(showMoreText);

  // Odin Buttons
  const odinFollowButton = document.createElement('div');
  odinFollowButton.classList.add('followButton');
  const odinFollowButtonText = document.createTextNode('Follow');
  odinFollowButton.append(odinFollowButtonText);
  const odinFollowingButton = document.createElement('div');
  odinFollowingButton.classList.add('followingButton');
  const odinFollowingButtonText = document.createTextNode('Following');
  odinFollowingButton.append(odinFollowingButtonText);
  const odinUnfollowButton = document.createElement('div');
  odinUnfollowButton.classList.add('unfollowButton');
  const odinUnfollowButtonText = document.createTextNode('Unfollow');
  odinUnfollowButton.append(odinUnfollowButtonText);

  // Odin Button Functions
  odinContainer.append(odinFollowButton);
  odinFollowButton.addEventListener('click', () => {
    odinContainer.removeChild(odinFollowButton);
    odinContainer.append(odinFollowingButton);
  });
  odinFollowingButton.addEventListener('mouseenter', () => {
    odinContainer.removeChild(odinFollowingButton);
    odinContainer.append(odinUnfollowButton);
  });
  odinUnfollowButton.addEventListener('mouseout', () => {
    odinContainer.removeChild(odinUnfollowButton);
    odinContainer.append(odinFollowingButton);
  });

  // Odin pop-up
  const unfollowPopUpContainer = document.createElement('div');
  unfollowPopUpContainer.classList.add('unfollowPopUpContainer');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const popUpUnfollowTitle = document.createTextNode('Unfollow');
  const popUpUnfollowTitleContainer = document.createElement('div');
  popUpUnfollowTitleContainer.classList.add('popUpUnfollowTitleContainer');
  const popUpPara = document.getElementById('popUpPara');
  const popUpParaContainer = document.createElement('div');
  popUpParaContainer.classList.add('popUpParaContainer');
  const popUpUnfollowButton = document.createElement('div');
  popUpUnfollowButton.classList.add('popUpUnfollowButton');
  const popUpUnfollowButtonText = document.createTextNode('Unfollow');
  const popUpCancelButton = document.createElement('div');
  popUpCancelButton.classList.add('popUpCancelButton');
  const popUpCancelButtonText = document.createTextNode('Cancel');
  unfollowPopUpContainer.append(popUpUnfollowTitleContainer);
  popUpUnfollowTitleContainer.append(popUpUnfollowTitle);
  unfollowPopUpContainer.append(popUpParaContainer);
  popUpParaContainer.append(popUpPara);
  unfollowPopUpContainer.append(popUpUnfollowButton);
  unfollowPopUpContainer.append(popUpCancelButton);
  popUpUnfollowButton.append(popUpUnfollowButtonText);
  popUpCancelButton.append(popUpCancelButtonText);

  odinUnfollowButton.addEventListener('click', () => {
    mainContainer.append(overlay);
    mainContainer.append(unfollowPopUpContainer);
  });
  popUpUnfollowButton.addEventListener('click', () => {
    mainContainer.removeChild(overlay);
    mainContainer.removeChild(unfollowPopUpContainer);
  });
}

export default createHomePage();
