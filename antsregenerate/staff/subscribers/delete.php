<?php

require_once('../../../private/initialize.php');

require_login();

if(!isset($_GET['id'])) {
  redirect_to(url_for('/staff/subscribers/index.php'));
}
$id = $_GET['id'];

if(is_post_request()) {

  $result = delete_subscriber($id);
  $_SESSION['message'] = 'The subscriber was deleted successfully.';
  redirect_to(url_for('/staff/subscribers/index.php'));

} else {
  $subscriber = find_subscriber_by_id($id);
}

?>

<?php $page_title = 'Delete Subscriber'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content_id">

  <a class="back-link" href="<?php echo url_for('/staff/subscribers/index.php'); ?>">&laquo; Back to List</a>

  <div class="subject delete">
    <h1>Delete Subscriber</h1>
    <p>Are you sure you want to delete this subscriber?</p>
    <p class="item"><?php echo h($subscriber['subscr_name']) . ' ' . h($subscriber['subscr_surname']); ?></p>

    <form action="<?php echo url_for('/staff/subscribers/delete.php?id=' . h(u($subscriber['id']))); ?>" method="post">
      <div id="operations">
        <input type="submit" name="commit" value="Delete Subscriber" />
      </div>
    </form>
  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
