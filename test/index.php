<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <select name="sel1" data-el="sel1" data-url="/test/api.php/{value}">
        <option value="0">None</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </select>
    <br>
    <select name="sel2" data-el="sel2" data-depends-on="sel1" data-url="/test/api.php/{value}">

    </select>
    <br>
    <select name="sel3" data-el="sel3" data-depends-on="sel2" data-url="test/api.php/{value}">

    </select>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="../dist/dependent-select.min.js"></script>
</body>
</html>