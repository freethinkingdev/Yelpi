/**
 * Created by marsin on 03/06/17.
 */

$(document).ready(function () {

    var addNewCommentForm = document.getElementById("#addNewComment");
    var revealCommentFormButton = document.getElementById("#revealAddNewCommentForm");

    revealCommentFormButton.on("click", function () {
        alert('works');
    });

    addNewCommentForm.slideDown("slow");
});