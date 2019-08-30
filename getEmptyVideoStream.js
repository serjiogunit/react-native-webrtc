'use strict';

import {NativeModules} from 'react-native';

import MediaStream from './MediaStream';

const {WebRTCModule} = NativeModules;

export default function getEmptyVideoStream() {
  return new Promise((resolve, reject) => {
    WebRTCModule.getEmptyVideoStream((id, tracks) => {
      const info = {
        streamId: id,
        streamReactTag: id,
        tracks
      };
      const stream = new MediaStream(info);
      resolve(stream);
    }, reject);
  });
}



