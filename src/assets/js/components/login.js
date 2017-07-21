'use strict';

function Login() {
	var section = $('<section></section>');

	var btn = $('<div id="gSignIn"></div>');
	var userDetails = $('<div class="userContent"></div>');

	section.append(btn);
	section.append(userDetails);




	return section;
}
