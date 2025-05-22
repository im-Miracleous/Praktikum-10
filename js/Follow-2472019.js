$(document).ready(function () {
    $(function () {
        var $rows = $("table tr");
        var colCount = $rows.eq(1).find("td").length;
        var rowCount = $rows.length - 2;

        $(".obstacle").each(function () {
            var $cell = $(this);
            var $row = $cell.parent();
            var col = $cell.index();
            var row = $row.index() - 1;

            // Untuk dashed border sisi atas
            if (row === 0) {
                $cell.css("border-top", "none");
            } else if ($row.prev().find("td").eq(col).hasClass("road")) {
                $cell.css("border-top", "2px dashed #000");
            }

            // Untuk dashed border sisi bawah
            if (row === rowCount - 1) {
                $cell.css("border-bottom", "none");
            } else if ($row.next().find("td").eq(col).hasClass("road")) {
                $cell.css("border-bottom", "2px dashed #000");
            }

            // Untuk dashed border sisi kiri
            if (col === 0) {
                $cell.css("border-left", "none");
            } else if ($cell.prev().hasClass("road")) {
                $cell.css("border-left", "2px dashed #000");
            }

            // Untuk dashed border sisi kanan
            if (col === colCount - 1) {
                $cell.css("border-right", "none");
            } else if ($cell.next().hasClass("road")) {
                $cell.css("border-right", "2px dashed #000");
            }
        });
    });

    // Kalo kena obstacle
    $(".obstacle").hover(
        function () {
            $(this).css("background-color", "red");
            setTimeout(() => {
                alert("You lose!");
            }, 50);
        },

        function () {
            $(this).css("background-color", "gray");
        }
    );

    // Kalo nyampe finish
    $("#finish").hover(
        function () {
            $(this).css("background-color", "gold");
            setTimeout(() => {
                alert("Congrats!")
            }, 50);
        },

        function () {
            $(this).css("background-color", "#fff");
        }
    );
});