<?php
    $conn = new mysqli("localhost", "pi", "MariaPass", "DEVdb");
	$a = $_GET['ing1'];
	$b = $_GET['ing2'];
	$c = $_GET['ing3'];

    // кейс 1
    if ($c != "") {
        $sql= "select Id, Name, Description from recipe
        where (ing1 = '" . $a . "' or ing2 = '" . $a . "' or ing3 = '" . $a . "') 
        and (ing1 = '" . $b . "' or ing2 = '" . $b . "' or ing3 = '" . $b . "')
        and (ing1 = '" . $c . "' or ing2 = '" . $c . "' or ing3 = '" . $c . "') ";
    }

    // кейс 2
    if ($c == "") {
        $sql= "select Id, Name, Description from recipe
        where (ing1 = '" . $a . "' or ing2 = '" . $a . "' or ing3 = '" . $a . "') 
        and (ing1 = '" . $b . "' or ing2 = '" . $b . "' or ing3 = '" . $b . "') 
        order by rand()
        limit 1";
    }

    // кейс 3
    if ($b == "") {
        $sql= "select Id, Name, Description from recipe
        where (ing1 = '" . $a . "' or ing2 = '" . $a . "' or ing3 = '" . $a . "')  
        order by rand()
        limit 1";
    }

    // кейс 4
    if ($a == "") {
        $sql= "select Id, Name, Description from recipe
        order by rand()
        limit 1";
    }
	
    //Вывод рецепта
    $result = $conn->query($sql);
	while($row = $result->fetch_assoc()) {
        $tojs[] = $row;
    }
    echo json_encode($tojs);
?>