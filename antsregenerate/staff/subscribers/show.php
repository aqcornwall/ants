<?php require_once('../../../private/initialize.php'); ?>

<?php
require_login();

// $id = isset($_GET['id']) ? $_GET['id'] : '1';
$id = $_GET['id'] ?? '1'; // PHP > 7.0

$subscriber = find_subscriber_by_id($id);


?>

<?php $page_title = 'Show subscriber'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subscribers/index.php'); ?>">&laquo; Back to List</a>

  <div class="subscriber show">

    <h1>subscriber: <?php echo h($subscriber['subscr_name']) .' '. h($subscriber['subscr_surname']); ?></h1>

    <div class="attributes">
      <dl>
        <dt>Name</dt>
        <dd><?php echo h($subscriber['subscr_name']); ?></dd>
      </dl>
      <dl>
      <dl>
        <dt>Surname</dt>
        <dd><?php echo h($subscriber['subscr_surname']); ?></dd>
      </dl>
      <dl>
        <dt>email</dt>
        <dd><?php echo h($subscriber['subscr_email']); ?></dd>
      </dl>
      <dl>
        <dt>Information</dt>
        <dd><?php echo  h($subscriber['subscr_information']); ?></dd>
      </dl>
    </div>

      






  </div>

</div>
