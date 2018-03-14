

    alert("Slytherin Sucks!");

    function addNewClass() { 
        var course = $("#new_class").val();
        //alert(course);
        $("#course_catalog").append('<li>'+course+ <button>Delete</button> + '</li>');
        $("#new_class").val(''); //returns empty string
    }

    $(function() {
        $("#add").on('click', addNewClass);

    });

