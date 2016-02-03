# TraiwiJS.AreaPrinter
How to use:

``` php

<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="TraiwiJS.min.js"></script>
  </head>
  <body>
    <button type="button" id="traiwijs-areaprinter-button">Select area to print</button>
	  
    <script type="text/javascript">
      new TraiwiJS.AreaPrinter();
    </script>
  </body>
</html>

```
Activate the button to enable the selection function. 
--------------------------------
# TraiwiJS.Datepicker
How to use:

``` php

<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="bower_components/jquery-ui/jquery-ui.min.js"></script>
    <script type="text/javascript" src="TraiwiJS.min.js"></script>
  </head>
  <body>
    <input type="text" id="traiwi-js-datepicker-a" />
	  
    <script type="text/javascript">
      TraiwiJS.Datepicker("traiwi-js-datepicker-a");
    </script>
  </body>
</html>

```
--------------------------------
# TraiwiJS.Dialoger
How to use:

``` php

<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="bower_components/jquery-ui/jquery-ui.min.js"></script>
    <script type="text/javascript" src="TraiwiJS.min.js"></script>
  </head>
  <body>
    <button id="show-d1">Show dialog</button>
	  
    <script type="text/javascript">
      var dialoger = new TraiwiJS.Dialoger();
      var d1 = dialoger.add();
      d1.html("<p>Dialoger generated dialog!</p>");
      $("#show-d1").click(function() {
        d1.dialog("open");
      });
    </script>
  </body>
</html>

```
