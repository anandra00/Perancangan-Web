$(document).ready(function () {
    let display = $('#display');
    let current = '';

    $('.btn').not('.equal, .clear, .delete').click(function () {
        let value = $(this).data('value');
        if (display.text() === '0' && value !== '.') {
            current = value.toString();
        } else {
            current += value.toString();
        }
        display.text(current);
    });

    $('.equal').click(function () {
        try {
            let result = eval(current);
            display.text(result);
            current = result.toString();
        } catch {
            display.text('Error');
            current = '';
        }
    });

    $('.clear').click(function () {
        current = '';
        display.text('0');
    });

    $('.delete').click(function () {
        current = current.slice(0, -1);
        display.text(current || '0');
    });
});
