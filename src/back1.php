<?php
    $user="pi";
    $pass="MariaPass";
    $conn = new mysqli("localhost", "pi", "MariaPass", "DEVdb");
    $pdo = new PDO('mysql:host=localhost;dbname=DEVdb', $user, $pass);
    $a = $_GET['ing1'];
    $b = $_GET['ing2'];
    $c = $_GET['ing3'];

    $stmt = $pdo->prepare("select Id, Name, Description from recipe
        where CONCAT(ing1, '.', ing2,'.', ing3) like :ingUno 
        and  CONCAT(ing1,'.', ing2, '.', ing3) like :ingDuo 
        and CONCAT(ing1,'.', ing2, '.', ing3) like :ingTre 
        order by rand() limit 1"
    );   
    $stmt->bindParam(':ingUno', $ingUno);
    $stmt->bindParam(':ingDuo', $ingDuo);
    $stmt->bindParam(':ingTre', $ingTre);

    // кейс 1
    if ($c != "") {
        $ingUno = "%$a%";
        $ingDuo = "%$b%";
        $ingTre = "%$c%";        
    }

    // кейс 2
    if ($c == "") {
        $ingUno = "%$a%";
        $ingDuo = "%$b%";
        $ingTre = "%$b%";        
    }

    // кейс 3
    if ($b == "") {
        $ingUno = "%$a%";
        $ingDuo = "%$a%";
        $ingTre = "%$a%";        
    }

    // кейс 4
    if ($a == "") {
        $stmt = $pdo->prepare("select Id, Name, Description from recipe
        order by rand() limit 1");
        
    }

    // Если в базе нет
    $arrayEmmergency[] = array(
        "Id" => "0",
        "Name" => "Recipe not found",
        "Description" => "It seems we don't have such recipe... Try other ingredients :)"
    );
	
    //Вывод рецепта
    $stmt->execute();
	while($row = $stmt->fetch()) {
        $tojs[] = $row;
        $newId = $row["Id"];
        $conn->query("INSERT INTO summon (Id, summonId, summonTime, sDescr) Select (max(Id) + 1), " . $newId . ", now(), 'Updating FE' from summon;");
    }

    // Ответила ли база
    if ($tojs == null) {
        echo json_encode($arrayEmmergency);
    } else {
        echo json_encode($tojs);
    } 
?>
