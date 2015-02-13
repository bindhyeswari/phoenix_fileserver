document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello World!');

    var btn = document.querySelector('button').addEventListener('click', function () {
        var files = Array.prototype.slice.call(document.querySelector('input[type="file"]').files);
        console.log(files);

        // test above steps before coding the part below
        var formdata = new FormData();
        formdata.append('name', 'Christina');
        formdata.append('file1', files[0]);

        // make an ajax call
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/files');
        xhr.setRequestHeader('accept', 'application/json');
        xhr.addEventListener('readystatechange', function () {
            if( xhr.readyState === 4 && xhr.status === 200 ) {
                var obj = JSON.parse(xhr.responseText);
                console.log(obj);
            }
        });
        xhr.send(formdata);
    });
});