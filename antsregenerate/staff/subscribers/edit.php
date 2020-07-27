<?php

require_once('../../../private/initialize.php');

require_login();

if(!isset($_GET['id'])) {
  redirect_to(url_for('/staff/subscribers/index.php'));
}
$id = $_GET['id'];

if(is_post_request()) {

  // Handle form values sent by new.php

  $subscriber = [];
  $subscriber['id'] = $id;
  $subscriber['subscr_amount'] = intval( $_POST['subscr_amount'] ) ?? '';
  $subscriber['subscr_name'] = $_POST['subscr_name'] ?? '';
  $subscriber['subscr_surname'] = $_POST['subscr_surname'] ?? '';
  $subscriber['subscr_email'] = $_POST['subscr_email'] ?? '';
  $subscriber['subscr_information'] = $_POST['subscr_information'] ?? '';

  $result = update_subscriber($subscriber);
  if($result === true) {
    $_SESSION['message'] = 'The subscriber was updated successfully.';
    redirect_to(url_for('/staff/subscribers/show.php?id=' . $id));
  } else {
    $errors = $result;
    //var_dump($errors);
  }

} else {

  $subscriber = find_subscriber_by_id($id);

}

$subscriber_set = find_all_subscribers();
$subscriber_count = mysqli_num_rows($subscriber_set);
mysqli_free_result($subscriber_set);

?>

<?php $page_title = 'Edit Subscriber'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subscribers/index.php'); ?>">&laquo; Back to List</a>

  <div class="subject edit">
    <h1>Edit subscriber</h1>

    <?php echo display_errors($errors); ?>

    <form action="<?php echo url_for('/staff/subscribers/edit.php?id=' . h(u($id))); ?>" method="post">
      <dl>
        <dt>Amount</dt>
        <dd><input type="text" name="subscr_amount" value="<?php echo h($subscriber['subscr_amount']); ?>" /></dd>
      </dl>
      <dl>
       <dl>
        <dt>Name</dt>
        <dd><input type="text" name="subscr_name" value="<?php echo h($subscriber['subscr_name']); ?>" /></dd>
      </dl>
        <dt>Surname</dt>
        <dd><input type="text" name="subscr_surname" value="<?php echo h($subscriber['subscr_surname']); ?>" /></dd>
      </dl>
      <dl>
        <dt>Email</dt>
        <dd><input type="text" name="subscr_email" value="<?php echo h($subscriber['subscr_email']); ?>" /></dd>
      </dl>
      <dl>
        <dt>Information</dt>
        <dd><input type="text" name="subscr_information" value="<?php echo h($subscriber['subscr_information']); ?>" /></dd>
      </dl>

      <div id="operations">
        <input type="submit" value="Edit subscriber" />
      </div>
    </form>

  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
