    'use strict';

    // function sleep(delay) {
    //   return new Promise(resolve => {
    //     setTimeout(resolve, delay);
    //   });
    // }

    async function testWebShare() {

      // const title_input = document.querySelector('#title');
      // const text_input = document.querySelector('#text');
      // const url_input = document.querySelector('#url');
      // const file_input = document.querySelector('#files');

      // const title = title_input.value;
      // const text = text_input.value;
      // const url = url_input.value;
      // const files = file_input.files;

      const title = "fff";
      const text = "ggg";
      const url = "https://deepak2607.github.io/";
      const files = "./okcredit.jpeg";

      try {
        await navigator.share({files, title, text, url});
        console.log('Successfully shared');
      } 
      catch (error) {
        console.log(error);
      }
    }

    // async function testWebShareDelay() {
    //   await sleep(6000);
    //   testWebShare();
    // }

    function onLoad() {
      document.querySelector('#share').addEventListener('click', testWebShare);
      if (navigator.share === undefined) {
        if (window.location.protocol === 'http:') {
          window.location.replace(window.location.href.replace(/^http:/, 'https:'));
        } 
      }
    }

    window.addEventListener('load', onLoad);