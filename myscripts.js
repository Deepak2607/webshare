    'use strict';

    function sleep(delay) {
      return new Promise(resolve => {
        setTimeout(resolve, delay);
      });
    }

    function logText(message, isError) {
      // if (isError)
      //   console.error(message);
      // else
      //   console.log(message);

      const p = document.createElement('p');
      if (isError)
        p.setAttribute('class', 'error');
      document.querySelector('#output').appendChild(p);
      p.appendChild(document.createTextNode(message));
    }

    function logError(message) {
      logText(message, true);
    }


    async function testWebShare() {
      if (navigator.share === undefined) {
        // logError('Error: Unsupported feature: navigator.share()');
        return;
      }

      const title_input = document.querySelector('#title');
      const text_input = document.querySelector('#text');
      const url_input = document.querySelector('#url');
      const file_input = document.querySelector('#files');


      const title = title_input.value;
      const text = text_input.value;
      const url = url_input.value;
      const files = file_input.files;


      if (files && files.length > 0) {
        if (!navigator.canShare || !navigator.canShare({files})) {
          // logError('Error: Unsupported feature: navigator.canShare()');
          return;
        }
      }


      try {
        await navigator.share({files, title, text, url});
        // logText('Successfully sent share');
      } 
      catch (error) {
        console.log(error);
        // logError('Error sharing: ' + error);
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
        // else {
        //   logError('Error: You need to use a browser that supports this draft ' +
        //            'proposal.');
        // }
      }
    }

    window.addEventListener('load', onLoad);