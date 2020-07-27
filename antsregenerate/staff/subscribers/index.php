<?php require_once('../../../private/initialize.php'); ?>

<?php

  require_login();

  $subscriber_set = find_all_subscribers();

?>

<?php $page_title = 'Subscribers'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content_id">
  <div class="subjects listing">
    <h1>subscribers</h1>

    <div class="actions">
      <a class="action" href="<?php echo url_for('/staff/subscribers/new.php'); ?>">Create New Subject</a>
    </div>

  	<table class="list">
  	  <tr>
        <th>ID</th>
        <th>Amount</th>
        <th>Name</th>
  	    <th>Surname</th>
        <th>Email</th>
        <th>Information</th>
  	    <th>&nbsp;</th>
  	    <th>&nbsp;</th>
        <th>&nbsp;</th>
  	  </tr>

      <?php while($subscriber = mysqli_fetch_assoc($subscriber_set)) { ?>

        <tr>
          <td><?php echo h($subscriber['id']); ?></td>
          <td><?php echo h($subscriber['subscr_amount']); ?></td>
    	    <td><?php echo h($subscriber['subscr_name']); ?></td>
          <td><?php echo h($subscriber['subscr_surname']); ?></td>
          <td><?php echo h($subscriber['subscr_email']); ?></td>
          <td><?php echo h($subscriber['subscr_information']); ?></td>
          <td><a class="action" href="<?php echo url_for('/staff/subscribers/show.php?id=' . h(u($subscriber['id']))); ?>">View</a></td>
          <td><a class="action" href="<?php echo url_for('/staff/subscribers/edit.php?id=' . h(u($subscriber['id']))); ?>">Edit</a></td>
          <td><a class="action" href="<?php echo url_for('/staff/subscribers/delete.php?id=' . h(u($subscriber['id']))); ?>">Delete</a></td>
    	  </tr>
      <?php } ?>
  	</table>

    <?php
      mysqli_free_result($subscriber_set);
    ?>
  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
