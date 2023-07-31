<!DOCTYPE html>
<html lang="en">
<body>
    
Form Submitted Successfully on <?php 
date_default_timezone_set('America/New_York');
echo date("m/d/Y") . " (mm/dd/yyyy) at " . date("h:ia") . " EST"; ?><br>
First Name: <?php echo $_POST["firstName"]; ?><br>
Last Name: <?php echo $_POST["lastName"]; ?><br>
Email Address: <?php echo $_POST["email"]; ?><br>
Phone Number: <?php echo $_POST["phone"]; ?><br>
City: <?php echo $_POST["city"]; ?><br>
State: <?php echo $_POST["state"]; ?><br>
Zip Code: <?php echo $_POST["zip"]; ?><br>
Agreed to Terms: <?php echo $_POST["checkterms"]; ?>

</body>
</html> 
