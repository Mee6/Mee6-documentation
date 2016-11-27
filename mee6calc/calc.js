function calculate()
{
    //Constants
    var min_xp_gain_per_message = 15;
    var max_xp_gain_per_message = 25;

    //Input from user
    var desired_level = document.getElementById("desired-level").value;
    var current_xp = document.getElementById("current-xp").value;

    //Magical math functions
    var xp_to_desired_level = 5 / 6 * desired_level * (2 * desired_level * desired_level + 27 * desired_level + 91);
    var xp_needed = xp_to_desired_level - current_xp;

    //Minimum, average, and maximum messages needed to send in order to reach specified level
    var min_messages_needed_to_send = Math.ceil(xp_needed / max_xp_gain_per_message);
    var avg_messages_needed_to_send = Math.ceil(xp_needed / ((min_xp_gain_per_message + max_xp_gain_per_message) / 2));
    var max_messages_needed_to_send = Math.ceil(xp_needed / min_xp_gain_per_message);

    //Display information to user
    document.getElementById("result-average").innerHTML = avg_messages_needed_to_send;
    document.getElementById("result-xp-needed").innerHTML = xp_needed;
    document.getElementById("result-minimum-messages-requirement").innerHTML = min_messages_needed_to_send;
    document.getElementById("result-maximum-messages-requirement").innerHTML = max_messages_needed_to_send;
}
