<?php

// $im - идентификатор изображения
// $VALUES - массив со значениями
// $LEGEND - массив с подписями
function Diagramm($im,$VALUES,$LEGEND) {
	GLOBAL $COLORS,$SHADOWS;

	$black=ImageColorAllocate($im,0,0,0);

	// Получим размеры изображения
	$W=ImageSX($im);                 
	$H=ImageSY($im);

	// Вывод легенды #####################################

	// Посчитаем количество пунктов, от этого зависит высота легенды
	$legend_count=count($LEGEND);

	// Посчитаем максимальную длину пункта, от этого зависит ширина легенды
	$max_length=0;
	foreach($LEGEND as $v) if ($max_length<strlen($v)) $max_length=strlen($v);

	// Номер шрифта, котором мы будем выводить легенду
	$FONT=2;
	$font_w=ImageFontWidth($FONT);
	$font_h=ImageFontHeight($FONT);

	// Вывод прямоугольника - границы легенды ----------------------------

	$l_width=($font_w*$max_length)+$font_h+10+5+10;
	$l_height=$font_h*$legend_count+10+10;

	
	// Получим координаты верхнего левого угла прямоугольника - границы легенды
	$l_x1=$W-10-$l_width;
	$l_y1=($H-$l_height)/2;

	// Выводя прямоугольника - границы легенды
	ImageRectangle($im, $l_x1, $l_y1, $l_x1+$l_width, $l_y1+$l_height, $black);

	// Вывод текст легенды и цветных квадратиков
	$text_x=$l_x1+10+5+$font_h;
	$square_x=$l_x1+10;
	$y=$l_y1+10;

	$i=0;
	foreach($LEGEND as $v) {
		$dy=$y+($i*$font_h);
		ImageString($im, $FONT, $text_x, $dy, $v, $black);
		ImageFilledRectangle($im,
                             $square_x+1,$dy+1,$square_x+$font_h-1,$dy+$font_h-1,
                             $COLORS[$i]);
		ImageRectangle($im,
                       $square_x+1,$dy+1,$square_x+$font_h-1,$dy+$font_h-1,
                       $black);
		$i++;
		}

	// Вывод круговой диаграммы ----------------------------------------

	$total=array_sum($VALUES);
	$anglesum=$angle=Array(0);
	$i=1;

	// Расчет углов
	while ($i<count($VALUES)) {
		$part=$VALUES[$i-1]/$total;
		$angle[$i]=floor($part*360);
		$anglesum[$i]=array_sum($angle);
		$i++;
		}
	$anglesum[]=$anglesum[0];

	// Расчет диаметра
	$diametr=$l_x1-10-10;

	// Расчет координат центра эллипса
	$circle_x=($diametr/2)+10;
	$circle_y=$H/2-10;

	// Поправка диаметра, если эллипс не помещается по высоте
	if ($diametr>($H*2)-10-10) $diametr=($H*2)-20-20-40;

	// Вывод тени
	for ($j=20;$j>0;$j--)
		for ($i=0;$i<count($anglesum)-1;$i++)
			ImageFilledArc($im,$circle_x,$circle_y+$j,
                               $diametr,$diametr/2,
                               $anglesum[$i],$anglesum[$i+1],
                               $SHADOWS[$i],IMG_ARC_PIE);

	// Вывод круговой диаграммы
	for ($i=0;$i<count($anglesum)-1;$i++)
		ImageFilledArc($im,$circle_x,$circle_y,
                           $diametr,$diametr/2,
                           $anglesum[$i],$anglesum[$i+1],
                           $COLORS[$i],IMG_ARC_PIE);
	}

// Зададим значение и подписи
$conn = new mysqli("localhost", "pi", "MariaPass", "DEVdb");
$sql = "select summonId, count(*) as summonCount from summon where sDescr = '' group by summonId";
$result = $conn->query($sql);
while($row = $result->fetch_assoc()) {
$VALUES[] = $row["summonCount"];
$LEGEND[] = $row["summonId"];
}


// $VALUES=$VALUESS;
// $LEGEND=$LEGENDS;

// Создадим изображения
header("Content-Type: image/png");
$im=ImageCreate(1000,1000);

// Зададим цвет фона. Немного желтоватый, для того, чтобы было
// видно границы изображения на белом фоне.
$bgcolor=ImageColorAllocate($im,255,255,255);

// Зададим цвета элементов
$COLORS[0] = imagecolorallocate($im, 255,0,0);
$COLORS[1] = imagecolorallocate($im, 255,0,72);
$COLORS[2] = imagecolorallocate($im, 180,0,144);
$COLORS[3] = imagecolorallocate($im, 108,72,216);
$COLORS[4] = imagecolorallocate($im, 36,144,255);
$COLORS[5] = imagecolorallocate($im,0,216,255);
$COLORS[6] = imagecolorallocate($im,0,255,216);
$COLORS[7] = imagecolorallocate($im,36,255,144);
$COLORS[8] = imagecolorallocate($im,108,216,72);
$COLORS[9] = imagecolorallocate($im,180,144,0);
$COLORS[10] = imagecolorallocate($im, 255,72,0);
$COLORS[11] = imagecolorallocate($im, 255,0,36);
$COLORS[12] = imagecolorallocate($im, 216,0,108);
$COLORS[13] = imagecolorallocate($im, 144,36,180);
$COLORS[14] = imagecolorallocate($im, 72,108,255);
$COLORS[15] = imagecolorallocate($im, 0,180,255);
$COLORS[16] = imagecolorallocate($im,0,255,255);
$COLORS[17] = imagecolorallocate($im,0,255,180);
$COLORS[18] = imagecolorallocate($im,72,255,108);
$COLORS[19] = imagecolorallocate($im,144,180,36);
$COLORS[20] = imagecolorallocate($im,216,108,0);
$COLORS[21] = imagecolorallocate($im, 255,36,0);



// Вызов функции рисования диаграммы
Diagramm($im,$VALUES,$LEGEND);

// Генерация изображения
ImagePNG($im)
?>