$(document).ready(function () {
    function add(task) {
        if (task) {
            $("#taskList").append(
                "<li><span>" + $("<div>").text(task).html() + '</span><button class="check-btn">&check;</button></li>'
            );
        }
    }

    $("#add").click(function () {
        var task = $("#inputTugas").val();
        if (task) {
            add(task);
            $("#inputTugas").val("");
        }
    });

    $("#inputTugas").keypress(function (i) {
        if (i === 13) {
            $("#add").click();
        }
    });

    $("#clear").click(function () {
        $("#taskList").empty();
    });

    $("#taskList").on("click", ".check-btn", function () {
        $(this).closest("li").remove();
    });
});