<?php require_once('../../../private/initialize.php'); ?>

<?php

require_login();

// $id = isset($_GET['id']) ? $_GET['id'] : '1';
$id = $_GET['id'] ?? '1'; // PHP > 7.0

$event = find_event_by_id($id);
$subject = find_subject_by_id($event['subject_id']);

?>

<?php $event_title = 'Show event'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subjects/show.php?id=' . h(u($subject['id']))); ?>">&laquo; Back to Subject event</a>

  <div class="event show">

    <h1>event: <?php echo h($event['menu_name']); ?></h1>

    <div class="actions">
      <a class="action" href="<?php echo url_for('/index.php?id=' . h(u($event['id'])) . '&preview=true'); ?>" target="_blank">Preview</a>
    </div>

    <div class="attributes">
      <dl>
        <dt>Subject</dt>
        <dd><?php echo h($subject['menu_name']); ?></dd>
      </dl>
      <dl>
        <dt>Menu Name</dt>
        <dd><?php echo h($event['menu_name']); ?></dd>
      </dl>
      <dl>
        <dt>Position</dt>
        <dd><?php echo h($event['position']); ?></dd>
      </dl>
      <dl>
        <dt>Visible</dt>
        <dd><?php echo $event['visible'] == '1' ? 'true' : 'false'; ?></dd>
      </dl>
      <dl>
        <dt>Content</dt>
        <dd><?php echo h($event['content']); ?></dd>
      </dl>
      <dl>
      <dl>
        <dt>Suffix</dt>
        <dd><?php echo h($event['suffix']); ?></dd>
      </dl>
      <dl>
      <dl>
        <dt>img url</dt>
        <dd><?php echo h($event['img_url']); ?></dd>
      </dl>
      <dl>         
        <dt>Meta Title</dt>
        <dd><?php echo h($event['meta_title']); ?></dd>
      </dl>
      <dl>
        <dt>Meta Description</dt>
        <dd><?php echo h($event['meta_description']); ?></dd>
      </dl>
    </div>


  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
