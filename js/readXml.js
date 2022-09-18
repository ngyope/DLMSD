$(function() {

    $.ajax ({
        url: 'xml/cartularies.xml',
        dataType: 'xml',
        success: function(data) {
            alert("成功!");

            let insertContents = '';
            $('item', data).each(function() {
                let thisItem = $(this);

                insertContents += '<li>';
                insertContents += '<number>';
                insertContents += thisItem.children('number').text();
                insertContents += '</number>';
                insertContents += '<p>';
                insertContents += thisItem.children('title').text();
                insertContents += '</p>';
                insertContents += '</li>';
            });
            $('#cartulary-link-list').append(insertContents);
        },
        error: function(data){
            alert("失敗！");
            console.log(data);
        }

    });
});
