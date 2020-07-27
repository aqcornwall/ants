<?php require_once('../../../private/initialize.php'); ?>

<?php

  require_login();

  $event_set = find_all_events();

?>

<?php $event_title = 'events'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content_id">
  <div class="events listing">
    <h1>Events</h1>

    <div class="actions">
      <a class="action" href="<?php echo url_for('/staff/events/new.php'); ?>">Create New Event</a>
    </div>

  	<table class="list">
  	  <tr>
        <th>ID</th>
        <th>Subject</th>
        <th>Position</th>
        <th>Visible</th>
  	    <th>Name</th>
  	    <th>&nbsp;</th>
  	    <th>&nbsp;</th>
        <th>&nbsp;</th>
  	  </tr>

      <?php while($event = mysqli_fetch_assoc($event_set)) { ?>
        <?php $subject = find_subject_by_id($event['subject_id']); ?>
        <tr>
          <td><?php echo h($event['id']); ?></td>
          <td><?php echo h($subject['menu_name']); ?></td>
          <td><?php echo h($event['position']); ?></td>
          <td><?php echo $event['visible'] == 1 ? 'true' : 'false'; ?></td>
    	    <td><?php echo h($event['menu_name']); ?></td>
          <td><a class="action" href="<?php echo url_for('/staff/events/show.php?id=' . h(u($event['id']))); ?>">View</a></td>
          <td><a class="action" href="<?php echo url_for('/staff/events/edit.php?id=' . h(u($event['id']))); ?>">Edit</a></td>
          <td><a class="action" href="<?php echo url_for('/staff/events/delete.php?id=' . h(u($event['id']))); ?>">Delete</a></td>
    	  </tr>
      <?php } ?>
  	</table>

    <?php mysqli_free_result($event_set); ?>

  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>