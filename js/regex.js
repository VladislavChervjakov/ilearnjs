const initialUrl = 'localhost/elementor-345';
const testUrl = 'localhost/post?p=345';

const sentence = 'Завтрак в 09:00 в комнате 123:456.';

const time = sentence.match( /\b\d\d:\d\d\b/g ).join( '' );

console.log( 'time ' + time );

const postId = +initialUrl.match( /elementor-\d+/g ).join( '' ).match( /\d+/g ).join( '' );
const urlRegexp = new RegExp( `/?p=${postId}` );
console.log( urlRegexp.test( testUrl ) );