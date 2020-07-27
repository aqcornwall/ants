<?php

$parent_dir= dirname(dirname(dirname(dirname($_SERVER['SCRIPT_NAME']))));

require_once('../../../private/initialize.php');

require_login();

if(!isset($_GET['id'])) {
  redirect_to(url_for('/staff/events/index.php'));
}
$id = $_GET['id'];

if(is_post_request()) {

  // Handle form values sent by new.php
  $event = [];
  $event['id'] = $id;
  $event['subject_id'] = $_POST['subject_id'] ?? '';
  $event['menu_name'] = $_POST['menu_name'] ?? '';
  $event['position'] = $_POST['position'] ?? '';
  $event['visible'] = $_POST['visible'] ?? '';
  $event['content'] = $_POST['content'] ?? '';
  $event['suffix'] = $_POST['suffix'] ?? '';
  $event['meta_title'] = $_POST['meta_title'] ?? '';
  $event['meta_description'] = $_POST['meta_description'] ?? '';
  $event['img_url'] = $_POST['img_url'] ;
 
  $uniqid = uniqid( '', true );
  if ( !empty( $_FILES['image']['name'] ) ) {
    # code...
    $event['img_url'] = $uniqid . '.'. img_format() ;
    $event['content'] = htmlspecialchars_decode(swapFirstUrl($event['content'], $event['img_url']));
  }


  // echo $event['img_url'];
  // die();


  $result = update_event($event);
  $image_upload_message = '';
  if($result === true) {

    //image uploading if any
    $image_upload_message = upload_image($uniqid);

    $_SESSION['message'] = 'The event was updated successfully.'. $image_upload_message;
    redirect_to(url_for('/staff/events/show.php?id=' . $id));
  } else {
    $errors = $result;
  }

} else {

  $event = find_event_by_id($id);

}

$event_count = count_events_by_subject_id($event['subject_id']);

?>

<?php $event_title = 'Edit Event'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subjects/show.php?id=' . h(u($event['subject_id']))); ?>">&laquo; Back to Subject event</a>

  <div class="page edit">
    <h1>Edit event</h1>

    <?php echo display_errors($errors); ?>

    <form action="<?php echo url_for('/staff/events/edit.php?id=' . h(u($id))); ?>" method="post" enctype="multipart/form-data">
      <dl>
        <dt>Subject</dt>
        <dd>
          <select name="subject_id">
          <?php
            $subject_set = find_all_subjects();
            while($subject = mysqli_fetch_assoc($subject_set)) {
              echo "<option value=\"" . h($subject['id']) . "\"";
              if($event["subject_id"] == $subject['id']) {
                echo " selected";
              }
              echo ">" . h($subject['menu_name']) . "</option>";
            }
            mysqli_free_result($subject_set);
          ?>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>Menu Name</dt>
        <dd><input type="text" name="menu_name" value="<?php echo h($event['menu_name']); ?>" /></dd>
      </dl>
      <dl>
        <dt>Position</dt>
        <dd>
          <select name="position">
            <?php
              for($i=1; $i <= $event_count; $i++) {
                echo "<option value=\"{$i}\"";
                if($event["position"] == $i) {
                  echo " selected";
                }
                echo ">{$i}</option>";
              }
            ?>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>Visible</dt>
        <dd>
          <input type="hidden" name="visible" value="0" />
          <input type="checkbox" name="visible" value="1"<?php if($event['visible'] == "1") { echo " checked"; } ?> />
        </dd>
      </dl>
      <dl>
      <dl>
        <dt>Image</dt>
        <dd><input type="file" name="image" value="<?php echo h($event['img_url']); ?>" />
        </dd>
      </dl>
        <dt>Content</dt>
        <dd>
          <textarea class="tinymce" name="content" cols="60" rows="10"><?php echo h($event['content']); ?></textarea>
        </dd>
      </dl>
      <dl>
        <dt>Suffix</dt>
        <dd><input type="text" name="suffix" value="<?php echo h($event['suffix']); ?>" />
        </dd>
      </dl>
      <dl>
        <dt>Meta Title</dt>
        <dd><input type="text" name="meta_title" value="<?php echo h($event['meta_title']); ?>" />
        </dd>
      </dl>
      <dl>
        <dt>Meta Description</dt>
        <dd>
          <textarea name="meta_description" cols="20" rows="2"><?php echo h($event['meta_description']); ?></textarea>
        </dd>
      </dl>
      <div id="operations">
        <input type="submit" value="Edit event" />
      </div>
    </form>

  </div>

</div>

<script type="text/javascript" src="<?php  echo url_for('/staff/events/'.'js/jquery.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/events/'.'plugin/tinymce/js/tinymce/tinymce.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/events/'.'plugin/tinymce/init-tinymce.js'); ?>"></script>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
