<?php

require_once('../../../private/initialize.php');

require_login();

$subscriber_set = find_all_subscribers();
$subscriber_count = mysqli_num_rows($subscriber_set) + 1;
mysqli_free_result($subscriber_set);

if(is_post_request()) {

  $subscriber = [];
  $subscriber['id'] = $id;
  $subscriber['subscr_amount'] = intval( $_POST['subscr_amount'] ) ?? '';
  $subscriber['subscr_name'] = $_POST['subscr_name'] ?? '';
  $subscriber['subscr_surname'] = $_POST['subscr_surname'] ?? '';
  $subscriber['subscr_email'] = $_POST['subscr_email'] ?? '';
  $subscriber['subscr_information'] = $_POST['subscr_information'] ?? '';


  $result = insert_subscriber($subscriber);
  if($result === true) {
    $new_id = mysqli_insert_id($db);
    $_SESSION['message'] = 'The subscriber was created successfully.';
    redirect_to(url_for('/staff/subscribers/show.php?id=' . $new_id));
  } else {
    $errors = $result;
  }

} else {
  // display the blank form
  $subscriber = [];
  $subscriber["subscr_amount"] = '';
  $subscriber["subscr_name"] = '';
  $subscriber["subscr_surname"] = '';
  $subscriber["subscr_email"] = '';
  $subscriber["subscr_information"] = '';


}

?>

<?php $page_title = 'Create Subscriber'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subscribers/index.php'); ?>">&laquo; Back to List</a>

  <div class="subject new">
    <h1>Create subscriber</h1>

    <?php echo display_errors($errors); ?>

    <form action="<?php echo url_for('/staff/subscribers/new.php'); ?>" method="post">
      <dl>
        <dt>Subscriber Name</dt>
        <dd><input type="text" name="subscr_name" value="<?php echo h($subscriber['subscr_name']); ?>" /></dd>
      </dl>
      <dl>
      <dl>
        <dt>Subscriber Surname</dt>
        <dd><input type="text" name="subscr_surname" value="<?php echo h($subscriber['subscr_surname']); ?>" /></dd>
      </dl>
      <dl>
      <dl>
        <dt>Subscriber Email</dt>
        <dd><input type="text" name="subscr_email" value="<?php echo h($subscriber['subscr_email']); ?>" /></dd>
      </dl>
      <dl>
      <dl>
        <dt>Subscriber Information</dt>
        <dd><input type="text" name="subscr_information" value="<?php echo h($subscriber['subscr_information']); ?>" /></dd>
      </dl>
      <dl>

      <div id="operations">
        <input type="submit" value="Create Subscriber" />
      </div>
    </form>

  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>

