function createHomePage() {
  const content = document.getElementById('content');
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
}

export default createHomePage();
