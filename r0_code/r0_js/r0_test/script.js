'use strict';debugger;
let r0='many different words inside sentence';
	let i=0;
	r0=r0.split(' ');
	for(i; i<r0.length; i++){
		r0[i]=r0[i].split('');
		r0[i][0]=r0[i][0].toUpperCase();
		r0[i]=r0[i].join('');
	}
	r0=r0.join(' ');
const r1 = r0;