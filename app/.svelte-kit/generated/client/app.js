export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/examples/example10": [5,[2]],
		"/examples/example11": [6,[2]],
		"/examples/example1": [4,[2]],
		"/examples/example2": [7,[2]],
		"/examples/example3": [8,[2]],
		"/examples/example4": [9,[2]],
		"/examples/example5": [10,[2]],
		"/examples/example6": [11,[2]],
		"/examples/example7": [12,[2]],
		"/examples/example8": [13,[2]],
		"/examples/example9": [14,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';