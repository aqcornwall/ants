<?php

$parent_dir= dirname(dirname(dirname(dirname($_SERVER['SCRIPT_NAME']))));

require_once('../../../private/initialize.php');

require_login();

if(!isset($_GET['id'])) {
  redirect_to(url_for('/staff/blogs/index.php'));
}
$id = $_GET['id'];

if(is_post_request()) {

  // Handle form values sent by new.php
  $blog = [];
  $blog['id'] = $id;
  $blog['subject_id'] = $_POST['subject_id'] ?? '';
  $blog['author_id'] = $_POST['author_id'] ?? '';
  $blog['menu_name'] = $_POST['menu_name'] ?? '';
  $blog['description'] = $_POST['description'] ?? '';
  $blog['position'] = $_POST['position'] ?? '';
  $blog['visible'] = $_POST['visible'] ?? '';
  $blog['content'] = $_POST['content'] ?? '';
//  $blog['suffix'] = $_POST['suffix'] ?? '';
  $blog['meta_title'] = $_POST['meta_title'] ?? '';
  $blog['meta_description'] = $_POST['meta_description'] ?? '';
  $blog['img_url'] = $_POST['img_url']?? '' ;
 
  $uniqid = uniqid( '', true );
  if ( !empty( $_FILES['image']['name'] ) ) {
    # code...
    $blog['img_url'] = $uniqid . '.'. img_format() ;
    //$blog['content'] = htmlspecialchars_decode(swapFirstUrl($blog['content'], $blog['img_url']));
    
  }


  // echo $blog['img_url'];
  // die();


  $result = update_blog($blog);
  $image_upload_message = '';
  if($result === true) {

    //image uploading if any
    $image_upload_message = upload_image($uniqid);

    $_SESSION['message'] = 'The blog was updated successfully.'. $image_upload_message;
    redirect_to(url_for('/staff/blogs/show.php?id=' . $id));
  } else {
    $errors = $result;
  }

} else {

  $blog = find_blog_by_id($id);

}

$blog_count = count_blogs_by_subject_id($blog['subject_id']);

?>

<?php $blog_title = 'Edit blog'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subjects/show.php?id=' . h(u($blog['subject_id']))); ?>">&laquo; Back to Subject blog</a>

  <div class="page edit">
    <h1>Edit blog</h1>

    <?php echo display_errors($errors); ?>

    <form action="<?php echo url_for('/staff/blogs/edit.php?id=' . h(u($id))); ?>" method="post" enctype="multipart/form-data">
      <dl>
        <dt>Subject</dt>
        <dd>
          <select name="subject_id">
          <?php
            $subject_set = find_all_subjects();
            while($subject = mysqli_fetch_assoc($subject_set)) {
              echo "<option value=\"" . h($subject['id']) . "\"";
              if($blog["subject_id"] == $subject['id']) {
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
        <dt>Author</dt>
        <dd>
          <select name="author_id">
          <?php
            $authors_set = find_all_admins();
            while($author = mysqli_fetch_assoc($authors_set)) {
              echo "<option value=\"" . h($author['id']) . "\"";
              if($blog["author_id"] == $author['id']) {
                echo " selected";
              }
              echo ">" . h($author['first_name']) . "</option>";
            }
            mysqli_free_result($author_set);
          ?>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>Menu Name</dt>
        <dd><input type="text" name="menu_name" value="<?php echo h($blog['menu_name']); ?>" /></dd>
      </dl>
      <dl>
      <dl>
        <dt>Description</dt>
        <dd><input type="text" name="description" value="<?php echo h($blog['description']); ?>" /></dd>
      </dl>
      <dl>
        <dt>Position</dt>
        <dd>
          <select name="position">
            <?php
              for($i=1; $i <= $blog_count; $i++) {
                echo "<option value=\"{$i}\"";
                if($blog["position"] == $i) {
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
          <input type="checkbox" name="visible" value="1"<?php if($blog['visible'] == "1") { echo " checked"; } ?> />
        </dd>
      </dl>
      <dl>
      <dl>
      <dl>
        <dt>Image File Name</dt>
        <dd><input style="width:300px" type="text" name="img_url" value="<?php echo h($blog['img_url']); ?>" />
        </dd>
      </dl>
        <dt>Image</dt>
        <dd><input type="file" name="image" value="<?php echo h($blog['img_url']); ?>" />
        </dd>
      </dl>
        <dt>Content</dt>
        <dd>
          <textarea class="tinymce" name="content" cols="60" rows="10"><?php echo h($blog['content']); ?></textarea>
        </dd>
      </dl>
<!--       <dl>
        <dt>Suffix</dt>
        <dd><input type="text" name="suffix" value="<?php// echo h($blog['suffix']); ?>" />
        </dd>
      </dl> -->
      <dl>
        <dt>Meta Title</dt>
        <dd><input type="text" name="meta_title" value="<?php echo h($blog['meta_title']); ?>" />
        </dd>
      </dl>
      <dl>
        <dt>Meta Description</dt>
        <dd>
          <textarea name="meta_description" cols="20" rows="2"><?php echo h($blog['meta_description']); ?></textarea>
        </dd>
      </dl>
      <div id="operations">
        <input type="submit" value="Edit blog" />
      </div>
    </form>

  </div>

</div>

<script type="text/javascript" src="<?php  echo url_for('/staff/blogs/'.'js/jquery.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/blogs/'.'plugin/tinymce/js/tinymce/tinymce.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/blogs/'.'plugin/tinymce/init-tinymce.js'); ?>"></script>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
