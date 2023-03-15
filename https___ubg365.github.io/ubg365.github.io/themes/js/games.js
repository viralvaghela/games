$(document).ready(function() {
    $(".categories-button").click(function() {
        $(".categories-button").removeClass("active");
        $(".search-button").removeClass("active");
        $(".row-menu").removeClass("none");
        $(".row-search").removeClass("none");
        $(".row-search").removeClass("block");
        $(".row-menu").removeClass("block");
        $(".categories-button").addClass("active");
        $(".row-search").addClass("none");
        $(".row-menu").addClass("block");
    });
    $(".search-button").click(function() {
        $(".categories-button").removeClass("active");
        $(".search-button").removeClass("active");
        $(".row-menu").removeClass("none");
        $(".row-menu").removeClass("none");
        $(".row-search").removeClass("block");
        $(".row-menu").removeClass("block");
        $(".search-button").addClass("active");
        $(".row-menu").addClass("none");
        $(".row-search").addClass("block");
    });
});
$('.btn-submit').on('click', function(event) {
    event.preventDefault();
    var name = $('#userName').val();
    var email = $('#userEmail').val();
    var content = $('#content').val();
    var daTa = {
        'name': name,
        'email': email,
        'content': content
    };
    if (grecaptcha.getResponse() == '') {
        var valid;
        valid = validateContact();
    } else {
        var valid;
        valid = validateContact();
        if (valid) {
            $.ajax({
                url: "/contact.ajax",
                data: daTa,
                type: "post",
                success: function(result) {
                    $('#mail_status').html(result);
                }
            });
        }
    }
});