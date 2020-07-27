<?php

  // Subjects

  function find_all_subjects($options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM subjects ";
    if($visible) {
      $sql .= "WHERE visible = true ";
    }
    $sql .= "ORDER BY position ASC";
    //echo $sql;
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function find_subject_by_id($id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM subjects ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    if($visible) {
      $sql .= "AND visible = true";
    }
    // echo $sql;
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $subject = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $subject; // returns an assoc. array
  }

  function validate_subject($subject) {
    $errors = [];

    // menu_name
    if(is_blank($subject['menu_name'])) {
      $errors[] = "Name cannot be blank.";
    } elseif(!has_length($subject['menu_name'], ['min' => 2, 'max' => 255])) {
      $errors[] = "Name must be between 2 and 255 characters.";
    }

    // position
    // Make sure we are working with an integer
    $postion_int = (int) $subject['position'];
    if($postion_int <= 0) {
      $errors[] = "Position must be greater than zero.";
    }
    if($postion_int > 999) {
      $errors[] = "Position must be less than 999.";
    }

    // visible
    // Make sure we are working with a string
    $visible_str = (string) $subject['visible'];
    if(!has_inclusion_of($visible_str, ["0","1"])) {
      $errors[] = "Visible must be true or false.";
    }

    return $errors;
  }

  function insert_subject($subject) {
    global $db;

    $errors = validate_subject($subject);
    if(!empty($errors)) {
      return $errors;
    }

    shift_subject_positions(0, $subject['position']);

    $sql = "INSERT INTO subjects ";
    $sql .= "(menu_name, position, visible, class_1, class_2) ";
    $sql .= "VALUES (";
    $sql .= "'" . db_escape($db, $subject['menu_name']) . "',";
    $sql .= "'" . db_escape($db, $subject['position']) . "',";
    $sql .= "'" . db_escape($db, $subject['visible']) . "',";
    $sql .= "'" . db_escape($db, $subject['class_1']) . "',";
    $sql .= "'" . db_escape($db, $subject['class_2']) . "'";
    $sql .= ")";
    $result = mysqli_query($db, $sql);
    // For INSERT statements, $result is true/false
    if($result) {
      return true;
    } else {
      // INSERT failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function update_subject($subject) {
    global $db;

    $errors = validate_subject($subject);
    if(!empty($errors)) {
      return $errors;
    }

    $old_subject = find_subject_by_id($subject['id']);
    $old_position = $old_subject['position'];
    shift_subject_positions($old_position, $subject['position'], $subject['id']);

    $sql = "UPDATE subjects SET ";
    $sql .= "menu_name='" . db_escape($db, $subject['menu_name']) . "', ";
    $sql .= "position='" . db_escape($db, $subject['position']) . "', ";
    $sql .= "visible='" . db_escape($db, $subject['visible']) . "', ";
    $sql .= "class_1='" . db_escape($db, $subject['class_1']) . "', ";
    $sql .= "class_2='" . db_escape($db, $subject['class_2']) . "' ";
    $sql .= "WHERE id='" . db_escape($db, $subject['id']) . "' ";
    $sql .= "LIMIT 1";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }

  }

  function delete_subject($id) {
    global $db;

    $old_subject = find_subject_by_id($id);
    $old_position = $old_subject['position'];
    shift_subject_positions($old_position, 0, $id);

    $sql = "DELETE FROM subjects ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    $sql .= "LIMIT 1";
    $result = mysqli_query($db, $sql);

    // For DELETE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // DELETE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function shift_subject_positions($start_pos, $end_pos, $current_id=0) {
    global $db;

    if($start_pos == $end_pos) { return; }

    $sql = "UPDATE subjects ";
    if($start_pos == 0) {
      // new item, +1 to items greater than $end_pos
      $sql .= "SET position = position + 1 ";
      $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
    } elseif($end_pos == 0) {
      // delete item, -1 from items greater than $start_pos
      $sql .= "SET position = position - 1 ";
      $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
    } elseif($start_pos < $end_pos) {
      // move later, -1 from items between (including $end_pos)
      $sql .= "SET position = position - 1 ";
      $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
      $sql .= "AND position <= '" . db_escape($db, $end_pos) . "' ";
    } elseif($start_pos > $end_pos) {
      // move earlier, +1 to items between (including $end_pos)
      $sql .= "SET position = position + 1 ";
      $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
      $sql .= "AND position < '" . db_escape($db, $start_pos) . "' ";
    }
    // Exclude the current_id in the SQL WHERE clause
    $sql .= "AND id != '" . db_escape($db, $current_id) . "' ";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }


  // Pages

  function find_all_pages() {
    global $db;

    $sql = "SELECT * FROM pages ";
    $sql .= "ORDER BY subject_id ASC, position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function find_page_by_id($id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM pages ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    if($visible) {
      $sql .= "AND visible = true";
    }
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $page = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $page; // returns an assoc. array
  }

  function validate_page($page) {
    $errors = [];

    // subject_id
    if(is_blank($page['subject_id'])) {
      $errors[] = "Subject cannot be blank.";
    }

    // menu_name
    if(is_blank($page['menu_name'])) {
      $errors[] = "Name cannot be blank.";
    } elseif(!has_length($page['menu_name'], ['min' => 2, 'max' => 255])) {
      $errors[] = "Name must be between 2 and 255 characters.";
    }
    $current_id = $page['id'] ?? '0';
    if(!has_unique_page_menu_name($page['menu_name'], $current_id)) {
      $errors[] = "Menu name must be unique.";
    }


    // position
    // Make sure we are working with an integer
    $postion_int = (int) $page['position'];
    if($postion_int <= 0) {
      $errors[] = "Position must be greater than zero.";
    }
    if($postion_int > 999) {
      $errors[] = "Position must be less than 999.";
    }

    // visible
    // Make sure we are working with a string
    $visible_str = (string) $page['visible'];
    if(!has_inclusion_of($visible_str, ["0","1"])) {
      $errors[] = "Visible must be true or false.";
    }

    // content
    if(is_blank($page['content'])) {
      $errors[] = "Content cannot be blank.";
    }

    // image

    // wrong format

    if ( !img_format_is_right() && !empty( $_FILES['image']['name'] ) ) {
      $errors[] = "image format updated is not supported yet, please choose among these format: jpg, jpeg, png, svg.";
    }

    //internal error

    if ( !$_FILES['image']['error'] === 0 )

      $errors[] = "image uploaded caused an internal error, please upload another image";

    // oversize

    if ( $_FILES['image']['size'] > 1000000 ){
      $errors[] = "image uploaded is too big";
    }

    return $errors;
  }

  function insert_page($page) {
    global $db;

    $errors = validate_page($page);
    if(!empty($errors)) {
      return $errors;
    }

    shift_page_positions(0, $page['position'], $page['subject_id']);
    $sql = "INSERT INTO pages ";
    $sql .= "(subject_id, menu_name, position, visible, content, suffix, img_url, meta_title, meta_description) ";
    $sql .= "VALUES (";
    $sql .= "'" . db_escape($db, $page['subject_id']) . "',";
    $sql .= "'" . db_escape($db, $page['menu_name']) . "',";
    $sql .= "'" . db_escape($db, $page['position']) . "',";
    $sql .= "'" . db_escape($db, $page['visible']) . "',";
    $sql .= "'" . db_escape($db, $page['content']) . "',";
    $sql .= "'" . db_escape($db, $page['suffix']) . "',";
    $sql .= "'" . db_escape($db, $page['img_url']) . "',";              
    $sql .= "'" . db_escape($db, $page['meta_title']) . "',";
    $sql .= "'" . db_escape($db, $page['meta_description']) . "'";
    $sql .= ")";
    $result = mysqli_query($db, $sql);
    // For INSERT statements, $result is true/false
    if($result) {
      return true;
    } else {
      // INSERT failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function update_page($page) {
    global $db;

    $errors = validate_page($page);
    if(!empty($errors)) {
      return $errors;
    }

    $old_page = find_page_by_id($page['id']);
    $old_position = $old_page['position'];
    shift_page_positions($old_position, $page['position'], $page['subject_id'], $page['id']);

    $sql = "UPDATE pages SET ";
    $sql .= "subject_id='" . db_escape($db, $page['subject_id']) . "', ";
    $sql .= "menu_name='" . db_escape($db, $page['menu_name']) . "', ";
    $sql .= "position='" . db_escape($db, $page['position']) . "', ";
    $sql .= "visible='" . db_escape($db, $page['visible']) . "', ";
    $sql .= "content='" . db_escape($db, $page['content']) . "', ";
    $sql .= "suffix='" . db_escape($db, $page['suffix']) . "', ";
    $sql .= "img_url='" . db_escape($db, $page['img_url']) . "', ";
    $sql .= "meta_title='" . db_escape($db, $page['meta_title']) . "', ";
    $sql .= "meta_description='" . db_escape($db, $page['meta_description']) . "' ";
    $sql .= "WHERE id='" . db_escape($db, $page['id']) . "' ";
    $sql .= "LIMIT 1";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }

  }

  function delete_page($id) {
    global $db;

    $old_page = find_page_by_id($id);
    $old_position = $old_page['position'];
    shift_page_positions($old_position, 0, $old_page['subject_id'], $id);

    $sql = "DELETE FROM pages ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    $sql .= "LIMIT 1";
    $result = mysqli_query($db, $sql);

    // For DELETE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // DELETE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function find_pages_by_subject_id($subject_id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM pages ";
    $sql .= "WHERE subject_id='" . db_escape($db, $subject_id) . "' ";
    if($visible) {
      $sql .= "AND visible = true ";
    }
    $sql .= "ORDER BY position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function count_pages_by_subject_id($subject_id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT COUNT(id) FROM pages ";
    $sql .= "WHERE subject_id='" . db_escape($db, $subject_id) . "' ";
    if($visible) {
      $sql .= "AND visible = true ";
    }
    $sql .= "ORDER BY position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $row = mysqli_fetch_row($result);
    mysqli_free_result($result);
    $count = $row[0];
    return $count;
  }

  function shift_page_positions($start_pos, $end_pos, $subject_id, $current_id=0) {
    global $db;

    if($start_pos == $end_pos) { return; }

    $sql = "UPDATE pages ";
    if($start_pos == 0) {
      // new item, +1 to items greater than $end_pos
      $sql .= "SET position = position + 1 ";
      $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
    } elseif($end_pos == 0) {
      // delete item, -1 from items greater than $start_pos
      $sql .= "SET position = position - 1 ";
      $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
    } elseif($start_pos < $end_pos) {
      // move later, -1 from items between (including $end_pos)
      $sql .= "SET position = position - 1 ";
      $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
      $sql .= "AND position <= '" . db_escape($db, $end_pos) . "' ";
    } elseif($start_pos > $end_pos) {
      // move earlier, +1 to items between (including $end_pos)
      $sql .= "SET position = position + 1 ";
      $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
      $sql .= "AND position < '" . db_escape($db, $start_pos) . "' ";
    }
    // Exclude the current_id in the SQL WHERE clause
    $sql .= "AND id != '" . db_escape($db, $current_id) . "' ";
    $sql .= "AND subject_id = '" . db_escape($db, $subject_id) . "'";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  //*************************************************blogs**********************************************************

function find_all_blogs() {
    global $db;

    $sql = "SELECT * FROM blogs ";
    $sql .= "ORDER BY subject_id ASC, position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function find_blog_by_id($id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM blogs ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    if($visible) {
      $sql .= "AND visible = true";
    }
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $blog = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $blog; // returns an assoc. array
  }

  function validate_blog($blog) {
    $errors = [];

    // subject_id
    if(is_blank($blog['subject_id'])) {
      $errors[] = "Subject cannot be blank.";
    }

    // menu_name
    if(is_blank($blog['menu_name'])) {
      $errors[] = "Name cannot be blank.";
    } elseif(!has_length($blog['menu_name'], ['min' => 2, 'max' => 255])) {
      $errors[] = "Name must be between 2 and 255 characters.";
    }
    $current_id = $blog['id'] ?? '0';
    if(!has_unique_blog_menu_name($blog['menu_name'], $current_id)) {
      $errors[] = "Menu name must be unique.";
    }


    // position
    // Make sure we are working with an integer
    $postion_int = (int) $blog['position'];
    if($postion_int <= 0) {
      $errors[] = "Position must be greater than zero.";
    }
    if($postion_int > 999) {
      $errors[] = "Position must be less than 999.";
    }

    // visible
    // Make sure we are working with a string
    $visible_str = (string) $blog['visible'];
    if(!has_inclusion_of($visible_str, ["0","1"])) {
      $errors[] = "Visible must be true or false.";
    }

    // content
    if(is_blank($blog['content'])) {
      $errors[] = "Content cannot be blank.";
    }

    return $errors;
  }

  function insert_blog($blog) {
    global $db;

    $errors = validate_blog($blog);
    if(!empty($errors)) {
      return $errors;
    }

    shift_blog_positions(0, $blog['position'], $blog['subject_id']);

    $sql = "INSERT INTO blogs ";
    $sql .= "(subject_id, author_id, menu_name, position, title, description, img_url, meta_title, meta_description, visible, content) ";
    $sql .= "VALUES (";
    $sql .= "'" . db_escape($db, $blog['subject_id']) . "',";
    $sql .= "'" . db_escape($db, $blog['author_id']) . "',";
    $sql .= "'" . db_escape($db, $blog['menu_name']) . "',";
    $sql .= "'" . db_escape($db, $blog['position']) . "',";
    $sql .= "'" . db_escape($db, $blog['title']) . "',";
    $sql .= "'" . db_escape($db, $blog['description']) . "',";
    $sql .= "'" . db_escape($db, $blog['img_url']) . "',";
    $sql .= "'" . db_escape($db, $blog['meta_title']) . "',";
    $sql .= "'" . db_escape($db, $blog['meta_description']) . "',";
    $sql .= "'" . db_escape($db, $blog['visible']) . "',";    
    $sql .= "'" . db_escape($db, $blog['content']) . "'";
    $sql .= ")";
    $result = mysqli_query($db, $sql);
    // For INSERT statements, $result is true/false
    if($result) {
      return true;
    } else {
      // INSERT failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function update_blog($blog) {
    global $db;

    $errors = validate_blog($blog);
    if(!empty($errors)) {
      return $errors;
    }

    $old_blog = find_blog_by_id($blog['id']);
    $old_position = $old_blog['position'];
    shift_blog_positions($old_position, $blog['position'], $blog['subject_id'], $blog['id']);

    $sql = "UPDATE blogs SET ";
    $sql .= "subject_id='" . db_escape($db, $blog['subject_id']) . "', ";
    $sql .= "author_id='" . db_escape($db, $blog['author_id']) . "', ";
    $sql .= "menu_name='" . db_escape($db, $blog['menu_name']) . "', ";
    $sql .= "position='" . db_escape($db, $blog['position']) . "', ";
    $sql .= "title='" . db_escape($db, $blog['title']) . "', ";
    $sql .= "description='" . db_escape($db, $blog['description']) . "', ";
    $sql .= "img_url='" . db_escape($db, $blog['img_url']) . "', ";
    $sql .= "meta_title='" . db_escape($db, $blog['meta_title']) . "', ";
    $sql .= "meta_description='" . db_escape($db, $blog['meta_description']) . "', ";
    $sql .= "visible='" . db_escape($db, $blog['visible']) . "', ";
    $sql .= "content='" . db_escape($db, $blog['content']) . "' ";
    $sql .= "WHERE id='" . db_escape($db, $blog['id']) . "' ";
    $sql .= "LIMIT 1";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }

  }

  function delete_blog($id) {
    global $db;

    $old_blog = find_blog_by_id($id);
    $old_position = $old_blog['position'];
    shift_blog_positions($old_position, 0, $old_blog['subject_id'], $id);

    $sql = "DELETE FROM blogs ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    $sql .= "LIMIT 1";
    $result = mysqli_query($db, $sql);

    // For DELETE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // DELETE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function find_blogs_by_subject_id($subject_id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM blogs ";
    $sql .= "WHERE subject_id='" . db_escape($db, $subject_id) . "' ";
    if($visible) {
      $sql .= "AND visible = true ";
    }
    $sql .= "ORDER BY position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function find_blogs_by_author_id($author_id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM blogs ";
    $sql .= "WHERE author_id='" . db_escape($db, $author_id) . "' ";
    if($visible) {
      $sql .= "AND visible = true ";
    }
    $sql .= "ORDER BY position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function count_blogs_by_subject_id($subject_id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT COUNT(id) FROM blogs ";
    $sql .= "WHERE subject_id='" . db_escape($db, $subject_id) . "' ";
    if($visible) {
      $sql .= "AND visible = true ";
    }
    $sql .= "ORDER BY position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $row = mysqli_fetch_row($result);
    mysqli_free_result($result);
    $count = $row[0];
    return $count;
  }
  function count_blogs_by_author_id($subject_id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT COUNT(id) FROM blogs ";
    $sql .= "WHERE author_id='" . db_escape($db, $author_id) . "' ";
    if($visible) {
      $sql .= "AND visible = true ";
    }
    $sql .= "ORDER BY position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $row = mysqli_fetch_row($result);
    mysqli_free_result($result);
    $count = $row[0];
    return $count;
  }

  function shift_blog_positions($start_pos, $end_pos, $subject_id, $current_id=0) { // might need to swap $subject_id with author_id
    global $db;

    if($start_pos == $end_pos) { return; }

    $sql = "UPDATE blogs ";
    if($start_pos == 0) {
      // new item, +1 to items greater than $end_pos
      $sql .= "SET position = position + 1 ";
      $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
    } elseif($end_pos == 0) {
      // delete item, -1 from items greater than $start_pos
      $sql .= "SET position = position - 1 ";
      $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
    } elseif($start_pos < $end_pos) {
      // move later, -1 from items between (including $end_pos)
      $sql .= "SET position = position - 1 ";
      $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
      $sql .= "AND position <= '" . db_escape($db, $end_pos) . "' ";
    } elseif($start_pos > $end_pos) {
      // move earlier, +1 to items between (including $end_pos)
      $sql .= "SET position = position + 1 ";
      $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
      $sql .= "AND position < '" . db_escape($db, $start_pos) . "' ";
    }
    // Exclude the current_id in the SQL WHERE clause
    $sql .= "AND id != '" . db_escape($db, $current_id) . "' ";
    $sql .= "AND subject_id = '" . db_escape($db, $subject_id) . "'";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  // *********************************************************events*******************************************

function find_all_events() {
    global $db;

    $sql = "SELECT * FROM events ";
    $sql .= "ORDER BY subject_id ASC, position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function find_event_by_id($id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM events ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    if($visible) {
      $sql .= "AND visible = true";
    }
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $event = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $event; // returns an assoc. array
  }

  function validate_event($event) {
    $errors = [];

    // subject_id
    if(is_blank($event['subject_id'])) {
      $errors[] = "Subject cannot be blank.";
    }

    // menu_name
    if(is_blank($event['menu_name'])) {
      $errors[] = "Name cannot be blank.";
    } elseif(!has_length($event['menu_name'], ['min' => 2, 'max' => 255])) {
      $errors[] = "Name must be between 2 and 255 characters.";
    }
    $current_id = $event['id'] ?? '0';
    if(!has_unique_event_menu_name($event['menu_name'], $current_id)) {
      $errors[] = "Menu name must be unique.";
    }


    // position
    // Make sure we are working with an integer
    $postion_int = (int) $event['position'];
    if($postion_int <= 0) {
      $errors[] = "Position must be greater than zero.";
    }
    if($postion_int > 999) {
      $errors[] = "Position must be less than 999.";
    }

    // visible
    // Make sure we are working with a string
    $visible_str = (string) $event['visible'];
    if(!has_inclusion_of($visible_str, ["0","1"])) {
      $errors[] = "Visible must be true or false.";
    }

    // content
    if(is_blank($event['content'])) {
      $errors[] = "Content cannot be blank.";
    }

    return $errors;
  }

  function insert_event($event) {
    global $db;

    $errors = validate_event($event);
    if(!empty($errors)) {
      return $errors;
    }

    shift_event_positions(0, $event['position'], $event['subject_id']);

    $sql = "INSERT INTO events ";
    $sql .= "(subject_id, menu_name, position, visible, content) ";
    $sql .= "VALUES (";
    $sql .= "'" . db_escape($db, $event['subject_id']) . "',";
    $sql .= "'" . db_escape($db, $event['menu_name']) . "',";
    $sql .= "'" . db_escape($db, $event['position']) . "',";
    $sql .= "'" . db_escape($db, $event['visible']) . "',";
    $sql .= "'" . db_escape($db, $event['content']) . "'";
    $sql .= ")";
    $result = mysqli_query($db, $sql);
    // For INSERT statements, $result is true/false
    if($result) {
      return true;
    } else {
      // INSERT failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function update_event($event) {
    global $db;

    $errors = validate_event($event);
    if(!empty($errors)) {
      return $errors;
    }

    $old_event = find_event_by_id($event['id']);
    $old_position = $old_event['position'];
    shift_event_positions($old_position, $event['position'], $event['subject_id'], $event['id']);

    $sql = "UPDATE events SET ";
    $sql .= "subject_id='" . db_escape($db, $event['subject_id']) . "', ";
    $sql .= "menu_name='" . db_escape($db, $event['menu_name']) . "', ";
    $sql .= "position='" . db_escape($db, $event['position']) . "', ";
    $sql .= "visible='" . db_escape($db, $event['visible']) . "', ";
    $sql .= "content='" . db_escape($db, $event['content']) . "' ";
    $sql .= "WHERE id='" . db_escape($db, $event['id']) . "' ";
    $sql .= "LIMIT 1";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }

  }

  function delete_event($id) {
    global $db;

    $old_event = find_event_by_id($id);
    $old_position = $old_event['position'];
    shift_event_positions($old_position, 0, $old_event['subject_id'], $id);

    $sql = "DELETE FROM events ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    $sql .= "LIMIT 1";
    $result = mysqli_query($db, $sql);

    // For DELETE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // DELETE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function find_events_by_subject_id($subject_id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM events ";
    $sql .= "WHERE subject_id='" . db_escape($db, $subject_id) . "' ";
    if($visible) {
      $sql .= "AND visible = true ";
    }
    $sql .= "ORDER BY position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function count_events_by_subject_id($subject_id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT COUNT(id) FROM events ";
    $sql .= "WHERE subject_id='" . db_escape($db, $subject_id) . "' ";
    if($visible) {
      $sql .= "AND visible = true ";
    }
    $sql .= "ORDER BY position ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $row = mysqli_fetch_row($result);
    mysqli_free_result($result);
    $count = $row[0];
    return $count;
  }

  function shift_event_positions($start_pos, $end_pos, $subject_id, $current_id=0) {
    global $db;

    if($start_pos == $end_pos) { return; }

    $sql = "UPDATE events ";
    if($start_pos == 0) {
      // new item, +1 to items greater than $end_pos
      $sql .= "SET position = position + 1 ";
      $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
    } elseif($end_pos == 0) {
      // delete item, -1 from items greater than $start_pos
      $sql .= "SET position = position - 1 ";
      $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
    } elseif($start_pos < $end_pos) {
      // move later, -1 from items between (including $end_pos)
      $sql .= "SET position = position - 1 ";
      $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
      $sql .= "AND position <= '" . db_escape($db, $end_pos) . "' ";
    } elseif($start_pos > $end_pos) {
      // move earlier, +1 to items between (including $end_pos)
      $sql .= "SET position = position + 1 ";
      $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
      $sql .= "AND position < '" . db_escape($db, $start_pos) . "' ";
    }
    // Exclude the current_id in the SQL WHERE clause
    $sql .= "AND id != '" . db_escape($db, $current_id) . "' ";
    $sql .= "AND subject_id = '" . db_escape($db, $subject_id) . "'";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }


  // Admins

  // Find all admins, ordered last_name, first_name
  function find_all_admins() {
    global $db;

    $sql = "SELECT * FROM admins ";
    $sql .= "ORDER BY last_name ASC, first_name ASC";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }

  function find_admin_by_id($id) {
    global $db;

    $sql = "SELECT * FROM admins ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    $sql .= "LIMIT 1";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $admin = mysqli_fetch_assoc($result); // find first
    mysqli_free_result($result);
    return $admin; // returns an assoc. array
  }

  function find_admin_by_username($username) {
    global $db;

    $sql = "SELECT * FROM admins ";
    $sql .= "WHERE username='" . db_escape($db, $username) . "' ";
    $sql .= "LIMIT 1";
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $admin = mysqli_fetch_assoc($result); // find first
    mysqli_free_result($result);
    return $admin; // returns an assoc. array
  }

  function validate_admin($admin, $options=[]) {

    $password_required = $options['password_required'] ?? true;

    if(is_blank($admin['first_name'])) {
      $errors[] = "First name cannot be blank.";
    } elseif (!has_length($admin['first_name'], array('min' => 2, 'max' => 255))) {
      $errors[] = "First name must be between 2 and 255 characters.";
    }

    if(is_blank($admin['last_name'])) {
      $errors[] = "Last name cannot be blank.";
    } elseif (!has_length($admin['last_name'], array('min' => 2, 'max' => 255))) {
      $errors[] = "Last name must be between 2 and 255 characters.";
    }

    if(is_blank($admin['email'])) {
      $errors[] = "Email cannot be blank.";
    } elseif (!has_length($admin['email'], array('max' => 255))) {
      $errors[] = "Last name must be less than 255 characters.";
    } elseif (!has_valid_email_format($admin['email'])) {
      $errors[] = "Email must be a valid format.";
    }

    if(is_blank($admin['username'])) {
      $errors[] = "Username cannot be blank.";
    } elseif (!has_length($admin['username'], array('min' => 8, 'max' => 255))) {
      $errors[] = "Username must be between 8 and 255 characters.";
    } elseif (!has_unique_username($admin['username'], $admin['id'] ?? 0)) {
      $errors[] = "Username not allowed. Try another.";
    }

    if($password_required) {
      if(is_blank($admin['password'])) {
        $errors[] = "Password cannot be blank.";
      } elseif (!has_length($admin['password'], array('min' => 12))) {
        $errors[] = "Password must contain 12 or more characters";
      } elseif (!preg_match('/[A-Z]/', $admin['password'])) {
        $errors[] = "Password must contain at least 1 uppercase letter";
      } elseif (!preg_match('/[a-z]/', $admin['password'])) {
        $errors[] = "Password must contain at least 1 lowercase letter";
      } elseif (!preg_match('/[0-9]/', $admin['password'])) {
        $errors[] = "Password must contain at least 1 number";
      } elseif (!preg_match('/[^A-Za-z0-9\s]/', $admin['password'])) {
        $errors[] = "Password must contain at least 1 symbol";
      }

      if(is_blank($admin['confirm_password'])) {
        $errors[] = "Confirm password cannot be blank.";
      } elseif ($admin['password'] !== $admin['confirm_password']) {
        $errors[] = "Password and confirm password must match.";
      }
    }

    return $errors;
  }

  function insert_admin($admin) {
    global $db;

    $errors = validate_admin($admin);
    if (!empty($errors)) {
      return $errors;
    }

    $hashed_password = password_hash($admin['password'], PASSWORD_BCRYPT);

    $sql = "INSERT INTO admins ";
    $sql .= "(first_name, last_name, email, username, hashed_password) ";
    $sql .= "VALUES (";
    $sql .= "'" . db_escape($db, $admin['first_name']) . "',";
    $sql .= "'" . db_escape($db, $admin['last_name']) . "',";
    $sql .= "'" . db_escape($db, $admin['email']) . "',";
    $sql .= "'" . db_escape($db, $admin['username']) . "',";
    $sql .= "'" . db_escape($db, $hashed_password) . "'";
    $sql .= ")";
    $result = mysqli_query($db, $sql);

    // For INSERT statements, $result is true/false
    if($result) {
      return true;
    } else {
      // INSERT failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function update_admin($admin) {
    global $db;

    $password_sent = !is_blank($admin['password']);

    $errors = validate_admin($admin, ['password_required' => $password_sent]);
    if (!empty($errors)) {
      return $errors;
    }

    $hashed_password = password_hash($admin['password'], PASSWORD_BCRYPT);

    $sql = "UPDATE admins SET ";
    $sql .= "first_name='" . db_escape($db, $admin['first_name']) . "', ";
    $sql .= "last_name='" . db_escape($db, $admin['last_name']) . "', ";
    $sql .= "email='" . db_escape($db, $admin['email']) . "', ";
    if($password_sent) {
      $sql .= "hashed_password='" . db_escape($db, $hashed_password) . "', ";
    }
    $sql .= "username='" . db_escape($db, $admin['username']) . "' ";
    $sql .= "WHERE id='" . db_escape($db, $admin['id']) . "' ";
    $sql .= "LIMIT 1";
    $result = mysqli_query($db, $sql);

    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function delete_admin($admin) {
    global $db;

    $sql = "DELETE FROM admins ";
    $sql .= "WHERE id='" . db_escape($db, $admin['id']) . "' ";
    $sql .= "LIMIT 1;";
    $result = mysqli_query($db, $sql);

    // For DELETE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // DELETE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

//*************************************************subscribers*********************************************

   function find_all_subscribers($options=[]) {
    global $db;


    $sql = "SELECT * FROM subscribers ";
    
    $sql .= "ORDER BY date ASC";
    //echo $sql;
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    return $result;
  }


  function validate_subscriber($subscriber) {
    $errors = [];

    // menu_name
    if(is_blank($subscriber['subscr_name'])) {
      $errors[] = "Name cannot be blank.";
    } elseif(!has_length($subscriber['subscr_name'], ['min' => 2, 'max' => 255])) {
      $errors[] = "Name must be between 2 and 255 characters.";
    }
    if(is_blank($subscriber['subscr_surname'])) {
      $errors[] = "Name cannot be blank.";
    } elseif(!has_length($subscriber['subscr_surname'], ['min' => 2, 'max' => 255])) {
      $errors[] = "Name must be between 2 and 255 characters.";
    }
     if(is_blank($subscriber['subscr_email'])) {
      $errors[] = "Email cannot be blank.";
    } elseif (!has_length($subscriber['subscr_email'], array('max' => 255))) {
      $errors[] = "Last name must be less than 255 characters.";
    } elseif (!has_valid_email_format($subscriber['subscr_email'])) {
      $errors[] = "Email must be a valid format.";
    }

    // position
    // Make sure we are working with an integer
    // $postion_int = (int) $subject['position'];
    // if($postion_int <= 0) {
    //   $errors[] = "Position must be greater than zero.";
    // }
    // if($postion_int > 999) {
    //   $errors[] = "Position must be less than 999.";
    // }

    // visible
    // Make sure we are working with a string
    // $visible_str = (string) $subject['visible'];
    // if(!has_inclusion_of($visible_str, ["0","1"])) {
    //   $errors[] = "Visible must be true or false.";
    // }

    return $errors;
  }

  function insert_subscriber($subscriber) {
    global $db;

    $errors = validate_subscriber($subscriber);
    if(!empty($errors)) {
      return $errors;
    }

    //shift_subscriber_positions(0, $subscriber['position']);

    $sql = "INSERT INTO subscribers ";
    $sql .= "(subscr_amount, subscr_name, subscr_surname, subscr_email, subscr_information) ";
    $sql .= "VALUES (";
    $sql .= "'" . db_escape($db, $subscriber['subscr_amount']) . "',";
    $sql .= "'" . db_escape($db, $subscriber['subscr_name']) . "',";
    $sql .= "'" . db_escape($db, $subscriber['subscr_surname']) . "',";
    $sql .= "'" . db_escape($db, $subscriber['subscr_email']) . "',";
    $sql .= "'" . db_escape($db, $subscriber['subscr_information']) . "'";
    $sql .= ")";
    $result = mysqli_query($db, $sql);
    // For INSERT statements, $result is true/false
    if($result) {
      return true;
    } else {
      // INSERT failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function find_subscriber_by_id($id, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM subscribers ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    if($visible) {
      $sql .= "AND visible = true";
    }
    // echo $sql;
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $subscriber = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $subscriber; // returns an assoc. array
  }

  function update_subscriber($subscriber) {
    global $db;

    $errors = validate_subscriber($subscriber);
    if(!empty($errors)) {
      return $errors;
    }

    // $old_subscriber = find_subscriber_by_email($subscriber['email']);
    // $old_position = $old_subscriber['position'];
    // shift_subscriber_positions($old_position, $subscriber['position'], $subscriber['id']);

    $sql = "UPDATE subscribers SET ";
    $sql .= "subscr_amount='" . db_escape($db, $subscriber['subscr_amount']) . "', ";
    $sql .= "subscr_name='" . db_escape($db, $subscriber['subscr_name']) . "', ";
    $sql .= "subscr_surname='" . db_escape($db, $subscriber['subscr_surname']) . "', ";
    $sql .= "subscr_email='" . db_escape($db, $subscriber['subscr_email']) . "', ";
    $sql .= "subscr_information='" . db_escape($db, $subscriber['subscr_information']) . "' ";
    $sql .= "WHERE id='" . db_escape($db, $subscriber['id']) . "' ";
    $sql .= "LIMIT 1";

    $result = mysqli_query($db, $sql);
    // For UPDATE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // UPDATE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }

  }

  function delete_subscriber($id) {
    global $db;

    // $old_subject = find_subject_by_id($id);
    // $old_position = $old_subject['position'];
    // shift_subject_positions($old_position, 0, $id);

    $sql = "DELETE FROM subscribers ";
    $sql .= "WHERE id='" . db_escape($db, $id) . "' ";
    $sql .= "LIMIT 1";
    $result = mysqli_query($db, $sql);

    // For DELETE statements, $result is true/false
    if($result) {
      return true;
    } else {
      // DELETE failed
      echo mysqli_error($db);
      db_disconnect($db);
      exit;
    }
  }

  function find_subscribers_by_email($email, $options=[]) {
    global $db;

    $visible = $options['visible'] ?? false;

    $sql = "SELECT * FROM subscribers ";
    $sql .= "WHERE email='" . db_escape($db, $email) . "' ";
    if($visible) {
      $sql .= "AND visible = true";
    }
    // echo $sql;
    $result = mysqli_query($db, $sql);
    confirm_result_set($result);
    $subscriber = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $subscriber; // returns an assoc. array
  }
  // function shift_subject_positions($start_pos, $end_pos, $current_id=0) {
  //   global $db;

  //   if($start_pos == $end_pos) { return; }

  //   $sql = "UPDATE subjects ";
  //   if($start_pos == 0) {
  //     // new item, +1 to items greater than $end_pos
  //     $sql .= "SET position = position + 1 ";
  //     $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
  //   } elseif($end_pos == 0) {
  //     // delete item, -1 from items greater than $start_pos
  //     $sql .= "SET position = position - 1 ";
  //     $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
  //   } elseif($start_pos < $end_pos) {
  //     // move later, -1 from items between (including $end_pos)
  //     $sql .= "SET position = position - 1 ";
  //     $sql .= "WHERE position > '" . db_escape($db, $start_pos) . "' ";
  //     $sql .= "AND position <= '" . db_escape($db, $end_pos) . "' ";
  //   } elseif($start_pos > $end_pos) {
  //     // move earlier, +1 to items between (including $end_pos)
  //     $sql .= "SET position = position + 1 ";
  //     $sql .= "WHERE position >= '" . db_escape($db, $end_pos) . "' ";
  //     $sql .= "AND position < '" . db_escape($db, $start_pos) . "' ";
  //   }
  //   // Exclude the current_id in the SQL WHERE clause
  //   $sql .= "AND id != '" . db_escape($db, $current_id) . "' ";

  //   $result = mysqli_query($db, $sql);
  //   // For UPDATE statements, $result is true/false
  //   if($result) {
  //     return true;
  //   } else {
  //     // UPDATE failed
  //     echo mysqli_error($db);
  //     db_disconnect($db);
  //     exit;
  //   }
  // }

?>
