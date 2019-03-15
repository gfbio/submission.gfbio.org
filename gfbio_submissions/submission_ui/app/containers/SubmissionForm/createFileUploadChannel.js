import { buffers, END, eventChannel } from 'redux-saga';

// export function createUploadFileChannel(endpoint, file, token) {
//   return eventChannel(emitter => {
//     const xhr = new XMLHttpRequest();
//     const onProgress = (e) => {
//       if (e.lengthComputable) {
//         const progress = e.loaded / e.total;
//         emitter({ progress });
//       }
//     };
//     const onFailure = (e) => {
//       emitter({ err: new Error('Upload failed') });
//       emitter(END);
//     };
//     xhr.upload.addEventListener('progress', onProgress);
//     xhr.upload.addEventListener('error', onFailure);
//     xhr.upload.addEventListener('abort', onFailure);
//     xhr.onreadystatechange = () => {
//       const { readyState, status } = xhr;
//       if (readyState === 4) {
//         if (status === 200) {
//           emitter({ success: true });
//           emitter(END);
//         } else {
//           onFailure(null);
//         }
//       }
//     };
//     xhr.open('POST', endpoint, true);
//     xhr.setRequestHeader('Authorization', 'Token ' + token);
//     let formData = new FormData();
//     formData.append('file', file);
//     xhr.send(formData);
//     return () => {
//       xhr.upload.removeEventListener('progress', onProgress);
//       xhr.upload.removeEventListener('error', onFailure);
//       xhr.upload.removeEventListener('abort', onFailure);
//       xhr.onreadystatechange = null;
//       xhr.abort();
//     };
//   }, buffers.sliding(2));
// }
