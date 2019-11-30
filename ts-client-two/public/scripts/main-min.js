/*
 *
 *  Air Horner
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  const Horn = function () {
    // The Horn Player.

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let source;
    let buffer;

    const loadSound = function (bufferObj, callback) {
      callback = callback || function () {};

      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        audioCtx.decodeAudioData(xhr.response, (decodedBuffer) => {
          callback(decodedBuffer);
        });
      };

      xhr.open('GET', '/sounds/airhorn.mp3');
      xhr.responseType = 'arraybuffer';
      xhr.send();
    };

    this.start = function () {
      source = audioCtx.createBufferSource();

      source.connect(audioCtx.destination);

      source.buffer = buffer;

      source.start(0);
      source.loop = true;
      source.loopStart = 0.24;
      source.loopEnd = 0.34;
    };

    this.stop = function () {
      if (!!source === true) {
        source.loop = false;
      }
    };

    const init = function () {
      loadSound(buffer, (decodedBuffer) => {
        buffer = decodedBuffer;
      });
    };

    init();
  };

  const AirHorn = function (root) {
    // Controls the AirHorn.

    const airhornImage = root.querySelector('.horn');
    const horn = new Horn();

    const start = function (e) {
      e.preventDefault();

      if (e.touches && e.touches.length > 1) {
        // Multi touch. OFF.
        return false;
      }

      // Play the sound
      airhornImage.classList.add('horning');
      horn.start();

      ga('send', 'event', 'horn', 'play');
    };

    const stop = function (e) {
      e.preventDefault();
      // Stop the sound
      airhornImage.classList.remove('horning');
      horn.stop();
    };

    airhornImage.addEventListener('mousedown', start);
    airhornImage.addEventListener('touchstart', start);

    document.documentElement.addEventListener('mouseup', stop);
    document.documentElement.addEventListener('touchend', stop);
  };

  window.addEventListener('load', () => {
    const airhornEl = document.getElementById('airhorn');
    const airhorn = new AirHorn(airhornEl);
  });
}());
