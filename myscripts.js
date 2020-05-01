    'use strict';

    function sleep(delay) {
      return new Promise(resolve => {
        setTimeout(resolve, delay);
      });
    }


    async function testWebShare() {

      // if (navigator.share === undefined) {
      //   // logError('Error: Unsupported feature: navigator.share()');
      //   return;
      // }

      const title_input = document.querySelector('#title');
      const text_input = document.querySelector('#text');
      const url_input = document.querySelector('#url');
      const file_input = document.querySelector('#files');


      const title = title_input.value;
      const text = text_input.value;
      const url = url_input.value;
      const files = file_input.files;


      // if (files && files.length > 0) {
      //   if (!navigator.canShare || !navigator.canShare({files})) {
      //     // logError('Error: Unsupported feature: navigator.canShare()');
      //     return;
      //   }
      // }


      try {
        await navigator.share({files, title, text, url});
        console.log('Successfully shared');
      } 
      catch (error) {
        console.log(error);
      }
    }

    async function testWebShareDelay() {
      await sleep(6000);
      testWebShare();
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