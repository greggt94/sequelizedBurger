$(document).on('submit', '.create-form', function (event) {
	event.preventDefault();
	var $form = $(this);
	$.ajax({
		url: $form.attr('action'),
		method: 'POST',
		data: $form.serialize(),
	})
});

$(document).on('submit', '.update-form', function (event) {
	event.preventDefault();
	var $form = $(this);
	$.ajax({
		url: $form.attr('action'),
		method: 'PUT',
		data: $form.serialize(),
	})
});


