<?php

function url_for($script_path) {
  // add the leading '/' if not present
  if($script_path[0] != '/') {
    $script_path = "/" . $script_path;
  }
  return WWW_ROOT . $script_path;
}

function u($string="") {
  return urlencode($string);
}

function raw_u($string="") {
  return rawurlencode($string);
}

function h($string="") {
  return htmlspecialchars($string);
}

function error_404() {
  header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found");
  exit();
}

function error_500() {
  header($_SERVER["SERVER_PROTOCOL"] . " 500 Internal Server Error");
  exit();
}

function redirect_to($location) {
  header("Location: " . $location);
  exit;
}

function is_post_request() {
  return $_SERVER['REQUEST_METHOD'] == 'POST';
}

function is_get_request() {
  return $_SERVER['REQUEST_METHOD'] == 'GET';
}

function display_errors($errors=array()) {
  $output = '';
  if(!empty($errors)) {
    $output .= "<div class=\"errors\">";
    $output .= "Please fix the following errors:";
    $output .= "<ul>";
    foreach($errors as $error) {
      $output .= "<li>" . h($error) . "</li>";
    }
    $output .= "</ul>";
    $output .= "</div>";
  }
  return $output;
}

function get_and_clear_session_message() {
  if(isset($_SESSION['message']) && $_SESSION['message'] != '') {
    $msg = $_SESSION['message'];
    unset($_SESSION['message']);
    return $msg;
  }
}

function display_session_message() {
  $msg = get_and_clear_session_message();
  if(!is_blank($msg)) {
    return '<div id="message">' . h($msg) . '</div>';
  }
}

function upload_image($uniqid){
if( isset( $_FILES['image'] )  && !empty( $_FILES['image']['name'] ) ){
    //die('function triggered');
    $image_name =   $_FILES['image']['name'];
    $image_endsuffix = explode( '.', $image_name );
    $image_endsuffix_actual = strtolower( end( $image_endsuffix ) );
    $image_tmp_name = $_FILES['image']['tmp_name'];
    $image_endsuffix_actual = strtolower( end( $image_endsuffix ) );
    //if(empty($image_endsuffix_actual)){$uniqid = '';}
    $new_file_name = $uniqid . '.' . $image_endsuffix_actual;
    $file_destination = PUBLIC_PATH . '/images/' . $new_file_name;
    move_uploaded_file($image_tmp_name, $file_destination);
    $image_upload_message = ' and your image has been uploaded';
    return $image_upload_message;
  }else{
    return null;
  }
}

function swapFirstUrl($default_content,$new_url){

  $string = htmlspecialchars_decode($default_content);
  $string = str_split($string);
  $counter = count($string);

  $url = '';
  for ($i=0; $i < $counter ; $i++) { 
    if( array_key_exists($i+1, $string) && 
        array_key_exists($i+2, $string) && 
        array_key_exists($i+3, $string) &&
        array_key_exists($i+4, $string) &&
        array_key_exists($i-1, $string) &&
        $string[$i-1] == ' ' &&
        $string[$i] == 's' &&
        $string[$i+1] == 'r' &&
        $string[$i+2] == 'c' &&
        $string[$i+3] == '=' &&
        $string[$i+4] == '"' ){
      
      $i= $i+5;
    
      for ($j=$i; $j < $counter  ; $j++) { 
         if (htmlspecialchars_decode($string[$i]) == '"' ){
            $j=0;
            break;
         }
         $url.= htmlspecialchars_decode($string[$i]);
         $i++;
      }//nested for 

    }//if

  }//for
  $string = implode($string);
  $new_url = url_for('/images/'.$new_url);
  $string = htmlspecialchars(str_replace($url, $new_url, $string));
  return $string;
}

?>
