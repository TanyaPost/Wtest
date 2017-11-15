$(document).ready(function(){

            function update() {
                var tasks_time = $('#tasks_time').slider('value');
                var tasks_done = $('#tasks_done').slider('value');
                var total_cost = (tasks_time * 4 * tasks_done) / (tasks_done * 3);
                var credits_needed = Math.round((total_cost / 10)+1);
                $("#total_cost").text(total_cost.toFixed(2));
                $("#curr-tasks_time").text(tasks_time);
                $("#curr-tasks_done").text(tasks_done);
                $("#credits_needed").text(credits_needed.toFixed(0));

            }

           $( "#tasks_time" ).slider({
                range: "min",
                value: 37,
                min: 1,
                max: 700,
                slide: function() {
                    update();
                }
            });


        });
