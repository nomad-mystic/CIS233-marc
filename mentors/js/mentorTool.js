/**
 * Created by endof on 2/19/2016.
 */




$(function() {
    var mentors;
    var departments;


    // Callback
    function selectItem(item) {
        $('#results').text(item);
    }
    function fetchDepartments() {
        $.getJSON('http://localhost:8080/CIS233Marc/mentors/departments.php', function(data) {
            departments = data;
            combo.setItems(departments.map(function(department) {
                return department.dept;
            }));
        });
    }
    function fetchMentors() {
        $.getJSON('http://localhost:8080/CIS233Marc/mentors/mentors.php', function(data) {
            mentors = data;
            mentorsId = {};

            mentors.forEach(function(mentors) {
                mentorsId[mentors.id] = mentors;
            });
            fetchDepartments();
        });
    }

    var combo = new Combo($('#department_combo'), selectItem);
    fetchMentors();

});  // End Ready