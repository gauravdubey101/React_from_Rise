//react from scratch 
// javacript required for react
//map and filter function

/* const names = ['kumar','happy','tony'];
const nameLengths = names.map(name => name.length);
console.log(nameLengths); */


/* const names = ['kumcsccar','haddppy','tony'];
const shortnames = names.filter(name => name.length<6);
console.log(shortnames); */

//combing mao and filter 

const names =   ['gau','hhbhb','jfhed','gdfhgydgfhb'];
const shortname = names.filter(name=>name.length<6).map(name=>name.length);
console.log(shortname);


/* Combining .filter() and .map()
 *
 * Using the musicData array, .filter, and .map():
 *   - filter the musicData array down to just the albums that have 
 *     sold over 1,000,000 copies
 *   - on the array returned from .filter(), call .map()
 *   - use .map() to return a string for each item in the array in the
 *     following format: "<artist> is a great performer"
 *   - store the array returned form .map() in a new "popular" variable
 *
 * Note:
 *   - do not delete the musicData variable
 *   - do not alter any of the musicData content
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const popular = musicData.filter(lyrci => lyrci.sales >1000000).map(lyrci => `${lyrci.artist} is greater performer`);

console.log(popular);

