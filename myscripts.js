   
    async function testWebShare() {

      // const title_input = document.querySelector('#title');
      // const text_input = document.querySelector('#text');
      // const url_input = document.querySelector('#url');
      const file_input = document.querySelector('#files');

      // const title = title_input.value;
      // const text = text_input.value;
      // const url = url_input.value;
      const files = file_input.files;

      const title = "Share";
      const text = "Share on any social platform";
      const url = "https://okcredit.in/";
      const files = files;

      try {
        await navigator.share({files, title, text, url});
        console.log('Successfully shared');
      } 
      catch (error) {
        console.log(error);
      }
    }

    function onLoad() {
      document.querySelector('#share').addEventListener('click', testWebShare);
      if (navigator.share === undefined) {
        if (window.location.protocol === 'http:') {
          window.location.replace(window.location.href.replace(/^http:/, 'https:'));
        } 
      }
    }

    window.addEventListener('load', onLoad);