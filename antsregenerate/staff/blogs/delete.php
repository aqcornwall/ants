<?php

require_once('../../../private/initialize.php');

require_login();

if(!isset($_GET['id'])) {
  redirect_to(url_for('/staff/blogs/index.php'));
}
$id = $_GET['id'];

$blog = find_blog_by_id($id);

if(is_post_request()) {

  $result = delete_blog($id);
  $_SESSION['message'] = 'The blog was deleted successfully.';
  redirect_to(url_for('/staff/subjects/show.php?id=' . h(u($blog['subject_id']))));

}

?>

<?php $blog_title = 'Delete Blog'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content_id">

  <a class="back-link" href="<?php echo url_for('/staff/subjects/show.php?id=' . h(u($blog['subject_id']))); ?>">&laquo; Back to Subject blog</a>

  <div class="blog delete">
    <h1>Delete Blog</h1>
    <p>Are you sure you want to delete this blog?</p>
    <p class="item"><?php echo h($blog['menu_name']); ?></p>

    <form action="<?php echo url_for('/staff/blogs/delete.php?id=' . h(u($blog['id']))); ?>" method="post">
      <div id="operations">
        <input type="submit" name="commit" value="Delete Blog" />
      </div>
    </form>
  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
