<?php
$parent_dir= dirname(dirname(dirname(dirname($_SERVER['SCRIPT_NAME']))));


require_once('../../../private/initialize.php');

require_login();


if(is_post_request()) {
  $event = [];
  $event['subject_id'] = $_POST['subject_id'] ?? '';
  $event['menu_name'] = $_POST['menu_name'] ?? '';
  $event['position'] = $_POST['position'] ?? '';
  $event['visible'] = $_POST['visible'] ?? '';
  $event['content'] = $_POST['content'] ?? '';
  $event['suffix'] = $_POST['suffix'] ?? '';
  $event['meta_title'] = $_POST['meta_title'] ?? '';
  $event['meta_description'] = $_POST['meta_description'] ?? '';

  $uniqid = uniqid( '', true );
  if ( !empty($_FILES['image']['name'] ) ) {

    $event['img_url'] = $uniqid . '.'. img_format() ;
    $event['content'] = htmlspecialchars_decode(swapFirstUrl($event['content'], $event['img_url']));
  }
  // echo $event['img_url'];
  // die();


  $result = insert_event($event);
  $image_upload_message = '';
  if($result === true) {

    //image uploading if any
    $image_upload_message = upload_image($uniqid);

    $new_id = mysqli_insert_id($db);
    $_SESSION['message'] = 'The event was created successfully.' . $image_upload_message;
    redirect_to(url_for('/staff/events/show.php?id=' . $new_id));
  } else {
    $errors = $result;
  }

} else {

  $event = [];
  $event['subject_id'] = $_GET['subject_id'] ?? '1';
  $event['menu_name'] = '';
  $event['position'] = '';
  $event['visible'] = '';
  $event['content'] = '';
  $event['suffix'] = '';
  $event['meta_title'] = '';
  $event['meta_description'] = '';


}

$event_count = count_events_by_subject_id($event['subject_id']) + 1;

?>

<?php $event_title = 'Create event'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subjects/show.php?id=' . h(u($event['subject_id']))); ?>">&laquo; Back to Subject event</a>

  <div class="event new">
    <h1>Create event</h1>

    <?php echo display_errors($errors); ?>

    <form action="<?php echo url_for('/staff/events/new.php'); ?>" method="post" enctype="multipart/form-data">
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
        <dt>Image</dt>
        <dd><input type="file" name="image" />
        </dd>
      </dl>
      <dl>
        <dt>Content</dt>
        <dd>
          <textarea class="tinymce" name="content" cols="60" rows="10"><?php echo $default_content; ?></textarea>
        </dd>
      </dl>
      <dl>
        <dt>Suffix</dt>
        <dd><input type="text" name="meta_title" value="<?php echo h($event['suffix']); ?>" /></dd>
      </dl>
      <dl>
        <dt>Meta Title</dt>
        <dd><input type="text" name="meta_title" value="<?php echo h($event['meta_title']); ?>" /></dd>
      </dl>
      <dl>
        <dt>Meta Description</dt>
        <dd>
          <textarea name="meta_description" cols="60" rows="5"><?php echo h($event['meta_description']); ?></textarea>
        </dd>
      </dl>
      <dl>      
      <div id="operations">
        <input type="submit" value="Create event" />
      </div>
    </form>

  </div>

</div>

<script type="text/javascript" src="<?php  echo url_for('/staff/events/'.'js/jquery.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/events/'.'plugin/tinymce/js/tinymce/tinymce.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/events/'.'plugin/tinymce/init-tinymce.js'); ?>"></script>


<?php include(SHARED_PATH . '/staff_footer.php'); ?>
