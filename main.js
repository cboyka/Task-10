function fout()
{
	let input = document.getElementById('search1');
	let label = document.getElementById('label1');

	if(!(input.value == ''))
		label.style.opacity = '0';
	else
		label.style.opacity = '1';
}

function fin()
{
	let input = document.getElementById('search1');
	let label = document.getElementById('label1');

	if(input.value == '')
		label.style.opacity = '0';

}