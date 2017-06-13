/**
 * Created by marsin on 13/06/17.
 */
alert('But are  sure it is alive????');


$(document).ready(function () {
    var showCommentForm = $("#showCommentAddForm");
    var addCommentForm = $("#newCommentForm");
    addCommentForm.slideUp("slow", function () {
        $("#commentsIcon").removeClass("fa-arrow-down").addClass("fa-arrow-right");
        //$("#commentsIcon").addClass("fa-arrow-right");
    });

    showCommentForm.on("click", function () {
        alert('It is alive');
        alert('It is alive');
        alert('It is alive');
        alert('It is alive');
        alert('It is alive');
    });
});