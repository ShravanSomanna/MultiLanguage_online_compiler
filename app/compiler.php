<?php
    $language = strtolower($_POST['language']);
    $code = $_POST['code'];

    $random = substr(md5(mt_rand()), 0, 1);
    
    $filePath = "temp/" . $random . "." . $language;
    $programFile = fopen($filePath, "w");
    fwrite($programFile, $code);
    fclose($programFile);
    
    if($language == "php") {
        $output = shell_exec("C:\Users\shravan\Documents\php-8.0.8-Win32-vs16-x64\php.exe $filePath 2>&1");
        echo $output;
    }
    if($language == "python") {
        $output = shell_exec("C:\Users\shravan\Documents\Python39-32\python.exe $filePath 2>&1");
        echo $output;
    }
    if($language == "node") {
        rename($filePath, $filePath.".js");
        $output = shell_exec("C:\Users\shravan\Documents\Nodejs\Node.exe $filePath.js 2>&1");
        echo $output;
    }
    if($language == "c") { 
        $outputExe = $random .".exe";
        shell_exec("gcc $filePath -o $outputExe");
        $output = shell_exec(__DIR__ . "//$outputExe");    
        echo $output;
    }
    if($language == "cpp") {
        $outputExe = $random .".exe";
        shell_exec("g++ $filePath -o $outputExe");
        $output = shell_exec(__DIR__. "//$outputExe");    
        echo $output;
    }
   
    if($language == "ruby") {
        $output = shell_exec("C:\Ruby30-x64\bin\Ruby.exe $filePath 2>&1");
         echo $output;
          
    }




