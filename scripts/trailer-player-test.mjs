import assert from 'node:assert/strict';

class FakeNode {
  constructor(tag){this.tagName=tag;this.children=[];}
  append(...children){this.children.push(...children);}
}

global.document={createElement:tag=>new FakeNode(tag),addEventListener(){}};
global.window={addEventListener(){}};
global.location={origin:'https://netflix-azerbaycan.vercel.app'};
const { player }=await import('../src/core/trailers.js');
const shell=player({title:'Sınaq filmi',trailer:{url:'https://www.youtube.com/watch?v=XN6nis46X28'}},false);
const frame=shell.children[0];
const url=new URL(frame.src);
assert.equal(url.searchParams.get('autoplay'),'1','Video default olaraq avtomatik başlamalıdır');
assert.equal(url.searchParams.get('mute'),'0','Video default olaraq səsli başlamalıdır');
assert.equal(url.searchParams.get('controls'),'1','YouTube-un səs və playback idarəetmələri görünməlidir');
console.log('Trailer player default controls test passed.');
