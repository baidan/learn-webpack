import stranger from './stranger';
let saying = stranger.words+ ' ,' +" i'mdasdaD "+ stranger.name;
document.querySelector('#entry').innerHTML = saying;
if(module.hot){
    module.hot.accept();
}