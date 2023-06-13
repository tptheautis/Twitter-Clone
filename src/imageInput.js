function uploadImage() {
  const imageInput = document.getElementById('#imageInput');
  let uploadedImage = '';

  imageInput.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      uploadedImage = reader.result;
      const myTweetImage = document.createElement('img');
      myTweetImage.src = uploadedImage;
      myTweetImage.classList.add('myTweetImage');
    });
    reader.readAsDataURL(this.files[0]);
  });
};

export default uploadImage;