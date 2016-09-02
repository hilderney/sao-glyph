/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'sao-glyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'sao-btn-armor-32': '&#xe900;',
		'sao-btn-avatar-32': '&#xe901;',
		'sao-btn-batle-healing-32': '&#xe902;',
		'sao-btn-blade-32': '&#xe903;',
		'sao-btn-blade-throwing-32': '&#xe904;',
		'sao-btn-cancel-32': '&#xe905;',
		'sao-btn-confirm-32': '&#xe906;',
		'sao-btn-details-32': '&#xe907;',
		'sao-btn-dual-blade-32': '&#xe908;',
		'sao-btn-dungeon-32': '&#xe909;',
		'sao-btn-equipament-32': '&#xe90a;',
		'sao-btn-exclamation-32': '&#xe90b;',
		'sao-btn-foward-32': '&#xe90c;',
		'sao-btn-friend-add-32': '&#xe90d;',
		'sao-btn-friend-remove-32': '&#xe90e;',
		'sao-btn-group-32': '&#xe90f;',
		'sao-btn-guild-32': '&#xe910;',
		'sao-btn-help-32': '&#xe911;',
		'sao-btn-invite-32': '&#xe912;',
		'sao-btn-itens-32': '&#xe913;',
		'sao-btn-list-32': '&#xe914;',
		'sao-btn-list-down-32': '&#xe915;',
		'sao-btn-list-up-32': '&#xe916;',
		'sao-btn-logout-32': '&#xe917;',
		'sao-btn-map-32': '&#xe918;',
		'sao-btn-message-32': '&#xe919;',
		'sao-btn-minus-32': '&#xe91a;',
		'sao-btn-necklace-32': '&#xe91b;',
		'sao-btn-options-32': '&#xe91c;',
		'sao-btn-party-32': '&#xe91d;',
		'sao-btn-plus-32': '&#xe91e;',
		'sao-btn-quest-32': '&#xe91f;',
		'sao-btn-question-32': '&#xe920;',
		'sao-btn-radar-32': '&#xe921;',
		'sao-btn-reverse-32': '&#xe922;',
		'sao-btn-signal-32': '&#xe923;',
		'sao-btn-skill-32': '&#xe924;',
		'sao-btn-start-32': '&#xe925;',
		'sao-btn-status-bar2-32': '&#xe926;',
		'sao-btn-stop-32': '&#xe927;',
		'sao-btn-tracking-32': '&#xe928;',
		'sao-btn-zoom-in-32': '&#xe929;',
		'sao-btn-zoom-out-32': '&#xe92a;',
		'sao-icon-armor-32': '&#xe92b;',
		'sao-icon-avatar-32': '&#xe92c;',
		'sao-icon-batle-healing-32': '&#xe92d;',
		'sao-icon-blade-32': '&#xe92e;',
		'sao-icon-blade-dual-32': '&#xe92f;',
		'sao-icon-blade-parrying-32': '&#xe930;',
		'sao-icon-blade-throwing-32': '&#xe931;',
		'sao-icon-cancel-32': '&#xe932;',
		'sao-icon-confirm-32': '&#xe933;',
		'sao-icon-details-32': '&#xe934;',
		'sao-icon-dungeon-32': '&#xe935;',
		'sao-icon-equipament-32': '&#xe936;',
		'sao-icon-exclamation-32': '&#xe937;',
		'sao-icon-foward-32': '&#xe938;',
		'sao-icon-friend-add-32': '&#xe939;',
		'sao-icon-friend-remove-32': '&#xe93a;',
		'sao-icon-group-32': '&#xe93b;',
		'sao-icon-guild-32': '&#xe93c;',
		'sao-icon-help-32': '&#xe93d;',
		'sao-icon-invite-32': '&#xe93e;',
		'sao-icon-itens-32': '&#xe93f;',
		'sao-icon-list-32': '&#xe940;',
		'sao-icon-list-down-32': '&#xe941;',
		'sao-icon-list-up-32': '&#xe942;',
		'sao-icon-logout-32': '&#xe943;',
		'sao-icon-map-32': '&#xe944;',
		'sao-icon-message-32': '&#xe945;',
		'sao-icon-minus-32': '&#xe946;',
		'sao-icon-necklace-32': '&#xe947;',
		'sao-icon-options-32': '&#xe948;',
		'sao-icon-party-32': '&#xe949;',
		'sao-icon-plus-32': '&#xe94a;',
		'sao-icon-quest-32': '&#xe94b;',
		'sao-icon-question-32': '&#xe94c;',
		'sao-icon-radar-32': '&#xe94d;',
		'sao-icon-reverse-32': '&#xe94e;',
		'sao-icon-signal-32': '&#xe94f;',
		'sao-icon-skill-32': '&#xe950;',
		'sao-icon-start-32': '&#xe951;',
		'sao-icon-status-bar2-32': '&#xe952;',
		'sao-icon-stop-32': '&#xe953;',
		'sao-icon-tracking-32': '&#xe954;',
		'sao-icon-zoom-in-32': '&#xe955;',
		'sao-icon-zoom-out-32': '&#xe956;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/sao-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
