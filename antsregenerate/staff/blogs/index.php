<?php require_once('../../../private/initialize.php'); ?>

<?php

  require_login();

  $blog_set = find_all_blogs();

?>

<?php $blog_title = 'blogs'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content_id">
  <div class="blogs listing">
    <h1>Blogs</h1>

    <div class="actions">
      <a class="action" href="<?php echo url_for('/staff/blogs/new.php'); ?>">Create New Blog</a>
    </div>

  	<table class="list">
  	  <tr>
        <th>ID</th>
  	    <th>Title</th>
        <th>Author</th>
        <th>Subject</th>
        <th>Position</th>
        <th>Visible</th>
  	    <th>&nbsp;</th>
  	    <th>&nbsp;</th>
        <th>&nbsp;</th>
  	  </tr>

      <?php while($blog = mysqli_fetch_assoc($blog_set)) { ?>
        <?php $subject = find_subject_by_id($blog['subject_id']); ?>
        <tr>
          <td><?php echo h($blog['id']); ?></td>
    	    <td><?php echo h($blog['menu_name']); ?></td>
          <?php $admin_set = find_admin_by_id( $blog['author_id'] ); ?>
          <td><?php echo h($admin_set['first_name']); ?></td>
          <td><?php echo h($subject['menu_name']); ?></td>
          <td><?php echo h($blog['position']); ?></td>
          <td><?php echo $blog['visible'] == 1 ? 'true' : 'false'; ?></td>
          <td><a class="action" href="<?php echo url_for('/staff/blogs/show.php?id=' . h(u($blog['id']))); ?>">View</a></td>
          <td><a class="action" href="<?php echo url_for('/staff/blogs/edit.php?id=' . h(u($blog['id']))); ?>">Edit</a></td>
          <td><a class="action" href="<?php echo url_for('/staff/blogs/delete.php?id=' . h(u($blog['id']))); ?>">Delete</a></td>
    	  </tr>
      <?php } ?>
  	</table>

    <?php mysqli_free_result($blog_set); ?>

  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>