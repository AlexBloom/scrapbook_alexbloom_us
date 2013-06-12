/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Journal-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-plus' : '&#x5a;',
			'icon-minus' : '&#x7a;',
			'icon-remove' : '&#x58;',
			'icon-link' : '&#xe002;',
			'icon-download-alt' : '&#x53;',
			'icon-chevron-right' : '&#x72;',
			'icon-chevron-left' : '&#x6c;',
			'icon-reorder' : '&#x6d;',
			'icon-home' : '&#x48;',
			'icon-image' : '&#x69;',
			'icon-Single' : '&#x73;',
			'icon-Grid' : '&#x67;',
			'icon-Mail' : '&#x21;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};