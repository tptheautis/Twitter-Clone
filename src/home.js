function createHomePage() {
  const content = document.getElementById('content');
  // Base Layout
  const mainContainer = document.createElement('div');
  const column1 = document.createElement('div');
  const column2 = document.createElement('div');
  const column3 = document.createElement('div');
  mainContainer.classList.add('mainContainer');
  column1.classList.add('column1');
  column2.classList.add('column2');
  column3.classList.add('column3');
  content.append(mainContainer);
  mainContainer.append(column1);
  mainContainer.append(column2);
  mainContainer.append(column3);

  // Left Sidebar
  const home = document.createElement('div');
  const explore = document.createElement('div');
  const notifications = document.createElement('div');
  const messages = document.createElement('div');
  const bookmarks = document.createElement('div');
  const twitterBlue = document.createElement('div');
  const profile = document.createElement('div');
  const more = document.createElement('div');
  const tweet = document.createElement('tweet');
}

export default createHomePage();
