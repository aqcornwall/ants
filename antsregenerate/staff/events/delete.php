<?php

require_once('../../../private/initialize.php');

require_login();

if(!isset($_GET['id'])) {
  redirect_to(url_for('/staff/events/index.php'));
}
$id = $_GET['id'];

$event = find_event_by_id($id);

if(is_post_request()) {

  $result = delete_event($id);
  $_SESSION['message'] = 'The event was deleted successfully.';
  redirect_to(url_for('/staff/subjects/show.php?id=' . h(u($event['subject_id']))));

}

?>

<?php $event_title = 'Delete event'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content_id">

  <a class="back-link" href="<?php echo url_for('/staff/subjects/show.php?id=' . h(u($event['subject_id']))); ?>">&laquo; Back to Subject event</a>

  <div class="page delete">
    <h1>Delete event</h1>
    <p>Are you sure you want to delete this event?</p>
    <p class="item"><?php echo h($event['menu_name']); ?></p>

    <form action="<?php echo url_for('/staff/events/delete.php?id=' . h(u($event['id']))); ?>" method="post">
      <div id="operations">
        <input type="submit" name="commit" value="Delete event" />
      </div>
    </form>
  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
