<?php

$parent_dir= dirname(dirname(dirname(dirname($_SERVER['SCRIPT_NAME']))));

require_once('../../../private/initialize.php');

require_login();

if(!isset($_GET['id'])) {
  redirect_to(url_for('/staff/pages/index.php'));
}
$id = $_GET['id'];

if(is_post_request()) {

  // Handle form values sent by new.php
  $page = [];
  $page['id'] = $id;
  $page['subject_id'] = $_POST['subject_id'] ?? '';
  $page['menu_name'] = $_POST['menu_name'] ?? '';
  $page['position'] = $_POST['position'] ?? '';
  $page['visible'] = $_POST['visible'] ?? '';
  $page['content'] = $_POST['content'] ?? '';
//  $page['suffix'] = $_POST['suffix'] ?? '';
  $page['meta_title'] = $_POST['meta_title'] ?? '';
  $page['meta_description'] = $_POST['meta_description'] ?? '';
  $page['img_url'] = $_POST['img_url'] ;
 
  $uniqid = uniqid( '', true );
  if ( !empty( $_FILES['image']['name'] ) ) {
    # code...
    $page['img_url'] = $uniqid . '.'. img_format() ;
    $page['content'] = htmlspecialchars_decode(swapFirstUrl($page['content'], $page['img_url']));
  }


  // echo $page['img_url'];
  // die();


  $result = update_page($page);
  $image_upload_message = '';
  if($result === true) {

    //image uploading if any
    $image_upload_message = upload_image($uniqid);

    $_SESSION['message'] = 'The page was updated successfully.'. $image_upload_message;
    redirect_to(url_for('/staff/pages/show.php?id=' . $id));
  } else {
    $errors = $result;
  }

} else {

  $page = find_page_by_id($id);

}

$page_count = count_pages_by_subject_id($page['subject_id']);

?>

<?php $page_title = 'Edit Page'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subjects/show.php?id=' . h(u($page['subject_id']))); ?>">&laquo; Back to Subject Page</a>

  <div class="page edit">
    <h1>Edit Page</h1>

    <?php echo display_errors($errors); ?>

    <form action="<?php echo url_for('/staff/pages/edit.php?id=' . h(u($id))); ?>" method="post" enctype="multipart/form-data">
      <dl>
        <dt>Subject</dt>
        <dd>
          <select name="subject_id">
          <?php
            $subject_set = find_all_subjects();
            while($subject = mysqli_fetch_assoc($subject_set)) {
              echo "<option value=\"" . h($subject['id']) . "\"";
              if($page["subject_id"] == $subject['id']) {
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
        <dd><input type="text" name="menu_name" value="<?php echo h($page['menu_name']); ?>" /></dd>
      </dl>
      <dl>
        <dt>Position</dt>
        <dd>
          <select name="position">
            <?php
              for($i=1; $i <= $page_count; $i++) {
                echo "<option value=\"{$i}\"";
                if($page["position"] == $i) {
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
          <input type="checkbox" name="visible" value="1"<?php if($page['visible'] == "1") { echo " checked"; } ?> />
        </dd>
      </dl>
      <dl>
      <dl>
        <dt>Image</dt>
        <dd><input type="file" name="image" value="<?php echo h($page['img_url']); ?>" />
        </dd>
      </dl>
        <dt>Content</dt>
        <dd>
          <textarea class="tinymce" name="content" cols="60" rows="10"><?php echo h($page['content']); ?></textarea>
        </dd>
      </dl>
      <dl>
        <dt>Suffix</dt>
        <dd><input type="text" name="suffix" value="<?php echo h($page['suffix']); ?>" />
        </dd>
      </dl>
      <dl>
        <dt>Meta Title</dt>
        <dd><input type="text" name="meta_title" value="<?php echo h($page['meta_title']); ?>" />
        </dd>
      </dl>
      <dl>
        <dt>Meta Description</dt>
        <dd>
          <textarea name="meta_description" cols="20" rows="2"><?php echo h($page['meta_description']); ?></textarea>
        </dd>
      </dl>
      <div id="operations">
        <input type="submit" value="Edit Page" />
      </div>
    </form>

  </div>

</div>

<script type="text/javascript" src="<?php  echo url_for('/staff/pages/'.'js/jquery.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/pages/'.'plugin/tinymce/js/tinymce/tinymce.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/pages/'.'plugin/tinymce/init-tinymce.js'); ?>"></script>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
