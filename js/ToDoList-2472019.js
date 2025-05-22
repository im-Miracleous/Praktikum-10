$(document).ready(function () {
    function add(task) {
        if (task) {
            $("#taskList").append(
                "<li><span>" + $("<div>").text(task).html() + '</span><button class="check-btn">&check;</button></li>'
            );
        }
    }

    $("#add").click(function () {
        if ($("#taskList li").length >= 10) {
        alert("Maximum of 10 tasks allowed!");
        return;
        }

        var task = $("#inputTugas").val();
        if (task) {
            add(task);
            $("#inputTugas").val("");
        }
    });

    // Jadinya bisa pakai tombol keyboard 'enter' juga buat tambah tugas
    $("#inputTugas").keypress(function (i) {
        if (i.which === 13) {
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