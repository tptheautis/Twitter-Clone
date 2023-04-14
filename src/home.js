function createHomePage() {
  const content = document.getElementById('content');
  const div = document.createElement('div');
  div.classList.add('test');
  const text = document.createTextNode('yes');
  div.append(text);
  content.append(div);
}

export default createHomePage();
