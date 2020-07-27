<?php
$parent_dir= dirname(dirname(dirname(dirname($_SERVER['SCRIPT_NAME']))));


require_once('../../../private/initialize.php');

require_login();


if(is_post_request()) {
  $blog = [];
  $blog['subject_id'] = $_POST['subject_id'] ?? '';
  $blog['author_id'] = $_POST['author_id'] ?? '';
  $blog['menu_name'] = $_POST['menu_name'] ?? '';
  $blog['position'] = $_POST['position'] ?? '';
  $blog['title'] = $_POST['title'] ?? '';
  $blog['description'] = $_POST['description'] ?? '';
  $blog['visible'] = $_POST['visible'] ?? '';
  $blog['content'] = $_POST['content'] ?? '';
  //$blog['suffix'] = $_POST['suffix'] ?? '';
  $blog['meta_title'] = $_POST['meta_title'] ?? '';
  $blog['meta_description'] = $_POST['meta_description'] ?? '';
  $blog['img_url'] = $_POST['img_url']?? '' ;
 

  $uniqid = uniqid( '', true );
  if ( !empty($_FILES['image']['name'] ) ) {

    $blog['img_url'] = $uniqid . '.'. img_format() ;
    //$blog['content'] = htmlspecialchars_decode(swapFirstUrl($blog['content'], $blog['img_url']));
  }
  // echo $blog['img_url'];
  // die();


  $result = insert_blog($blog);
  $image_upload_message = '';
  if($result === true) {

    //image uploading if any
    $image_upload_message = upload_image($uniqid);

    $new_id = mysqli_insert_id($db);
    $_SESSION['message'] = 'The blog was created successfully.' . $image_upload_message;
    redirect_to(url_for('/staff/blogs/show.php?id=' . $new_id));
  } else {
    $errors = $result;
  }

} else {

  $blog = [];
  $blog['subject_id'] = $_GET['subject_id'] ?? '1';
  $blog['author_id'] = $_GET['author_id'] ?? '2';
  $blog['menu_name'] = '';
  $blog['position'] = '';
  $blog['title'] = '';
  $blog['description'] = '';
  $blog['visible'] = '';
  $blog['content'] = '';
  //$blog['suffix'] = '';
  $blog['meta_title'] = '';
  $blog['meta_description'] = '';


}

$blog_count = count_blogs_by_subject_id($blog['subject_id']) + 1;

?>

<?php $blog_title = 'Create blog'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subjects/show.php?id=' . h(u($blog['subject_id']))); ?>">&laquo; Back to Subject blog</a>

  <div class="blog new">
    <h1>Create blog</h1>

    <?php echo display_errors($errors); ?>

    <form action="<?php echo url_for('/staff/blogs/new.php'); ?>" method="post" enctype="multipart/form-data">
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
            $author_set = find_all_admins();
            while($author = mysqli_fetch_assoc($author_set)) {
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
        <dt>Image</dt>
        <dd><input type="file" name="image" />
        </dd>
      </dl>
      <dl>
        <dt>Description</dt>
        <dd>
          <textarea name="description" cols="60" rows="5"><?php echo h($blog['description']); ?></textarea>
        </dd>
      </dl>
      <dl>
        <dt>Content</dt>
        <dd>
          <textarea class="tinymce" name="content" cols="60" rows="10"><?php echo $default_content; ?></textarea>
        </dd>
      </dl>
<!--       <dl>
        <dt>Suffix</dt>
        <dd><input type="text" name="meta_title" value="<?php echo h($blog['suffix']); ?>" /></dd>
      </dl>
      <dl> -->
        <dt>Meta Title</dt>
        <dd><input type="text" name="meta_title" value="<?php echo h($blog['meta_title']); ?>" /></dd>
      </dl>
      <dl>
        <dt>Meta Description</dt>
        <dd>
          <textarea name="meta_description" cols="60" rows="5"><?php echo h($blog['meta_description']); ?></textarea>
        </dd>
      </dl>
      <dl>      
      <div id="operations">
        <input type="submit" value="Create Blog" />
      </div>
    </form>

  </div>

</div>

<script type="text/javascript" src="<?php  echo url_for('/staff/blogs/'.'js/jquery.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/blogs/'.'plugin/tinymce/js/tinymce/tinymce.min.js'); ?>"></script>
<script type="text/javascript" src="<?php   echo url_for('/staff/blogs/'.'plugin/tinymce/init-tinymce.js'); ?>"></script>


<?php include(SHARED_PATH . '/staff_footer.php'); ?>
