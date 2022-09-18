$(function() {

    $.ajax ({
        url: 'DLMSD/xml/cartularies.xml',
        dataType: 'xml',
        success: function(data) {

            let insertContents = '';
            $('item', data).each(function() {
                let thisItem = $(this);

                insertContents += '<li>';
                insertContents += '<p>';
                insertContents += '<a href="' + thisItem.children('url').text() + '" targe="_blank">'; 
                insertContents += thisItem.children('number').text();
                insertContents += ': ';
                insertContents += thisItem.children('title').text();
                insertContents += '</a>';
                insertContents += '</p>';
                insertContents += '</li>';
            });
            $('#cartulary-link-list').append(insertContents);
        },
        error: function(data){
            alert("Failured to load data.");
        }

    });
});
